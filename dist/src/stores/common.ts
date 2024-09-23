export const READY = 'ready';
export const CHANGE = 'change';

export const READY_SCHEMA = {
  [READY]: {type: 'boolean', default: false},
} as const;
