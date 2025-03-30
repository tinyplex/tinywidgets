import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import type {Store} from 'tinybase';
import {createLocalPersister} from 'tinybase/persisters/persister-browser/with-schemas';
import type {Persister} from 'tinybase/persisters/with-schemas';
import {
  Provider as UiReactProvider,
  useStore,
  useStores,
} from 'tinybase/ui-react';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import type {Id, Store as StoreWithSchemas} from 'tinybase/with-schemas';
import {createStore} from 'tinybase/with-schemas';

export type Task =
  | ((
      arg: string,
      store: Store | undefined,
      scheduleTask: ScheduleTask,
    ) => void)
  | ((
      arg: string,
      store: StoreWithSchemas<any> | undefined,
      scheduleTask: ScheduleTask,
    ) => void)
  | ((
      arg: string,
      store: Store | undefined,
      scheduleTask: ScheduleTask,
    ) => Promise<void>)
  | ((
      arg: string,
      store: StoreWithSchemas<any> | undefined,
      scheduleTask: ScheduleTask,
    ) => Promise<void>);
export type Tasks = {
  [taskId: string]: Task;
};
export type ScheduleTask = (taskId: Id, arg?: string, storeId?: string) => void;

const STORE_ID = 'tinywidgets/Tasks';
const TABLE_ID = 'tasks';

const TABLES_SCHEMA = {
  tasks: {
    taskId: {type: 'string', default: ''},
    arg: {type: 'string'},
    storeId: {type: 'string'},
    running: {type: 'boolean'},
    expires: {type: 'number', default: 0},
  },
} as const;
const VALUES_SCHEMA = {} as const;
type Schemas = [typeof TABLES_SCHEMA, typeof VALUES_SCHEMA];
const {useCreateStore, useCreatePersister} =
  UiReact as UiReact.WithSchemas<Schemas>;

const Context = createContext<ScheduleTask>(() => {});

const TaskRunner = ({
  tasks,
  tasksStore,
  interval,
}: {
  readonly tasks: Tasks;
  readonly tasksStore: StoreWithSchemas<Schemas>;
  readonly interval: number;
}) => {
  const store = useStore();
  const stores = useStores();
  const scheduleTask = useContext(Context);
  useEffect(() => {
    const nextJob = async () => {
      const jobId = tasksStore.getRowIds(TABLE_ID)[0];
      if (jobId != null) {
        const {taskId, arg, storeId, running, expires} = tasksStore.getRow(
          TABLE_ID,
          jobId,
        );
        if (expires > Date.now()) {
          const task = tasks[taskId];
          if (task && !running) {
            tasksStore.setCell(TABLE_ID, jobId, 'running', true);
            try {
              await task(
                arg ?? '',
                storeId == null ? store : (stores[storeId] as any),
                scheduleTask,
              );
            } catch {}
            tasksStore.delRow(TABLE_ID, jobId);
          }
        } else {
          tasksStore.delRow(TABLE_ID, jobId);
        }
      }
    };
    const intervalHandle = setInterval(nextJob, interval * 1000);
    return () => clearInterval(intervalHandle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksStore, JSON.stringify(Object.keys(stores))]);

  return null;
};

/**
 * The useScheduleTask hook returns a function that can be used to schedule a
 * new task.
 *
 * The returned function takes the following arguments:
 *
 * - `taskId`: a required string to identify the task by Id.
 * - `arg`: an optional string that will be passed to the task when run.
 * - `storeId`: an optional string that will be used to look up a Store by Id in
 *   the current TinyBase Provider context and be passed to the task.
 *
 * @example
 * ```tsx
 * const TaskButton = () => {
 *   const scheduleTask = useScheduleTask();
 *   return (<Button
 *     title="Hello"
 *     onClick={() => scheduleTask('greet', 'Hello')}
 *   />);
 * };
 * // ...
 * <TasksProvider tasks={{greet: (arg: string) => alert(arg)}}>
 *   <TaskButton />
 * </TasksProvider>
 * ```
 * This example shows the hook returning a function that will schedule a task to
 * be run by the provider. Note that it may take as long as a second (the
 * default interval between task executions) for the alert to appear.
 * @example
 * ```tsx
 * const TaskButton2 = () => {
 *   const scheduleTask = useScheduleTask();
 *   return (<Button
 *     iconRight={Lucide.Globe}
 *     title="Hello"
 *     onClick={() => scheduleTask('greet1', 'Hello')}
 *   />);
 * };
 * // ...
 * <TasksProvider tasks={{
 *   greet1: async (arg: string, _: unknown, scheduleTask: ScheduleTask) => {
 *     scheduleTask('greet2', 'World');
 *     alert(arg);
 *   },
 *   greet2: (arg: string) => alert(arg)
 * }}>
 *   <TaskButton2 />
 * </TasksProvider>
 * ```
 * This example shows the hook returning a function that will schedule a task to
 * be run by the provider. That task in turn will call another.
 * @example
 * ```tsx
 * const TaskButton3 = () => {
 *   const scheduleTask = useScheduleTask();
 *   return (<Button
 *     title="JSON"
 *     onClick={() => scheduleTask('json', '', 'store1')}
 *   />);
 * };
 * // ...
 * <Provider storesById={{
 *   store1: useCreateStore(() =>
 *     createStore().setCell('pets', 'fido', 'species', 'dog')),
 *   }}>
 *   <TasksProvider tasks={{
 *     json: (_arg: string, store: Store | undefined) =>
 *       alert(store?.getJson()),
 *   }}>
 *     <TaskButton3 />
 *   </TasksProvider>
 * </Provider>
 * ```
 * This example shows the hook returning a function that will schedule a task to
 * be run by the provider, using a Store from the current context, specified by
 * Id.
 */
export const useScheduleTask = () => useContext(Context);

/**
 * The `TasksProvider` component is a non-visual component that makes it easy to
 * manage sequential tasks in your TinyWidget application.
 *
 * @param props The props for the component.
 * @returns The TasksProvider component.
 * @icon Lucide.FileClock
 * @example
 * ```tsx
 * const TaskButton1 = () => {
 *   const scheduleTask = useScheduleTask();
 *   return (<Button
 *     iconRight={Lucide.Hand}
 *     title="Hello"
 *     onClick={() => scheduleTask('greet1')}
 *   />);
 * };
 * const TaskButton2 = () => {
 *   const scheduleTask = useScheduleTask();
 *   return (<Button
 *     iconRight={Lucide.Globe}
 *     title="World"
 *     onClick={() => scheduleTask('greet2')}
 *   />);
 * };
 * // ...
 * <TasksProvider tasks={{
 *   greet1: () => alert('Hello'),
 *   greet2: () => alert('World'),
 * }}>
 *   <TaskButton1 />
 *   <TaskButton2 />
 * </TasksProvider>
 * ```
 * This example shows the hook returning a function that will schedule a task to
 * be run by the provider. That task in turn will call another.
 */
export const TasksProvider = ({
  tasks,
  interval = 1,
  expiry = 5,
  children,
}: {
  /**
   * An object listing all the tasks that can be executed, keyed by Id.
   *
   * Each task is a function that receives a string argument, a reference to a
   * Store (each as specified when `scheduleTask` was called), and a reference
   * to the `scheduleTask` function again so that tasks can be chained.
   *
   * A task can be asynchronous.
   */
  readonly tasks: Tasks;
  /**
   * The interval in seconds between each task execution, defaulting to 1.
   */
  readonly interval?: number;
  /**
   * The time in seconds from scheduling until a task expires and will not be
   * started, defaulting to 5.
   */
  readonly expiry?: number;
  /**
   * The children of the component to be rendered.
   */
  readonly children: ReactNode;
}) => {
  const pendingAddedJobs = useRef<
    [taskId: string, arg?: string, storeId?: string][]
  >([]);
  const activePersister = useRef<Persister<Schemas> | undefined>(undefined);

  const tasksStore = useCreateStore(() =>
    createStore().setSchema(TABLES_SCHEMA, VALUES_SCHEMA),
  );

  useCreatePersister(
    tasksStore,
    (tasksStore) => createLocalPersister(tasksStore, STORE_ID),
    [],
    async (persister) => {
      await persister.startAutoLoad();
      tasksStore.forEachRow('tasks', (taskId, _) =>
        tasksStore.delCell('tasks', taskId, 'running'),
      );
      await persister.startAutoSave();
      activePersister.current = persister;
      pendingAddedJobs.current.forEach((pendingAddedJob) =>
        scheduleTask(...pendingAddedJob),
      );
      pendingAddedJobs.current.splice(0);
    },
  );

  const scheduleTask: ScheduleTask = useCallback(
    (taskId: string, arg?: string, storeId?: string) => {
      if (activePersister.current) {
        tasksStore.addRow(TABLE_ID, {
          taskId,
          expires: Date.now() + expiry * 1000,
          arg,
          storeId,
        });
      } else {
        pendingAddedJobs.current.push([taskId, arg, storeId]);
      }
    },
    [tasksStore, expiry],
  );

  return (
    <Context.Provider value={scheduleTask}>
      <UiReactProvider>
        {children}
        <TaskRunner tasks={tasks} tasksStore={tasksStore} interval={interval} />
      </UiReactProvider>
    </Context.Provider>
  );
};
