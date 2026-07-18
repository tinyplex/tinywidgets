# TinyWidgets Agent Notes

## Scope

This file is the local project guide for work in this repository. Use it to avoid re-discovering the package layout and component conventions on each task.

## Repo Layout

- `package/`: publishable `tinywidgets` library.
- `package/src/components/`: one folder per component.
- `package/src/css/`: shared theme contracts, tokens, and global styles.
- `package/src/stores/`: TinyBase-backed UI state used by `App` and stateful widgets.
- `package/src/common/`: shared helpers such as `classNames` and `renderComponentOrNode`.
- `site/`: docs/demo app, including API generation from package source JSDoc.
- `docs/`: built site output.

## Public Package Surface

- Package entrypoint: `package/src/index.ts`.
- CSS submodule entrypoint: `package/src/index.css.ts`.
- If you add a new public component, export it from `package/src/index.ts`.
- If you add a new public CSS object/token, export it from `package/src/index.css.ts`.

## Component Structure

- Each component lives in `package/src/components/<Name>/`.
- Standard files:
  - `index.tsx`: component behavior and JSDoc.
  - `index.css.ts`: Vanilla Extract styles.
- Keep components small and DOM-light.
- Prefer shared helpers and shared tokens over ad hoc logic or hard-coded values.

## Component Authoring Conventions

- Props are usually typed inline on the exported component instead of with a separate exported interface.
- Use `readonly` prop fields.
- Common prop shapes:
  - `className?: string`
  - `children: ReactNode` for container components
  - `icon?: ComponentType<{className?: string}>` for icon slots
  - `title?: ComponentType | ReactNode` for renderable slots
- Use `renderComponentOrNode` when a prop can be either a component or a node.
- Use `classNames` to compose CSS classes.
- Put visual variants in `styleVariants` within `index.css.ts` and type the prop as `keyof typeof ...Variants`.
- Reuse shared sizing tokens such as `iconSize` where appropriate.

## Styling System

- Styling is done with Vanilla Extract.
- Shared tokens live in:
  - `package/src/css/colors.css.ts`
  - `package/src/css/dimensions.css.ts`
  - `package/src/css/screens.ts`
- Global style entrypoint is `package/src/index.css.ts`, which imports `package/src/css/global.css.ts`.
- Prefer shared colors, dimensions, borders, and shadows instead of introducing new one-off values.
- TinyWidgets exposes CSS token objects publicly; preserve that pattern when extending shared styling primitives.

## Stateful Behavior

- Stateless primitives should stay simple and local.
- For transient controlled UI behavior, local React state is normal.
- For UI state that should persist across reloads or coordinate with `App`, use the TinyBase stores under `package/src/stores/`.
- `App` is the root provider for `SessionStore`, `LocalStore`, and `RouteStore`.
- Existing persistence patterns:
  - session state for collapsibles and side nav
  - local state for dark mode preference
  - hash-based route persistence

## Documentation Rules

- The source of truth for API docs is JSDoc in `package/src/**`.
- `site/buildApi.ts` parses exported declarations and their JSDoc to build the docs site.
- `site/buildApi.ts` generates `site/src/pages/_api.tsx` from package source comments and examples.
- For every public component or hook, include:
  - a top-level description
  - `@param props` or relevant params
  - `@returns`
  - one or more `@example` blocks
  - `@icon Lucide.*` when applicable
- Document each prop with JSDoc on the inline prop type.
- Keep examples realistic and minimal; they are consumed by the docs generator.

## README And Publishing

- `package/README.md` and `package/LICENSE` must match their repo-root copies;
  package verification checks them byte for byte.
- The published tarball is allowlisted to package source, README, and license.
- `npm run verify` in `package/` runs:
  - Prettier
  - ESLint
  - cspell
  - TypeScript
  - Vitest
  - README and license mirror checks
- The standard `prepack` lifecycle runs the same verification before packaging.

## Testing And Verification

- First-party component and SSR regression tests live in `package/test/`.
- Run `npm test` from `package/` for focused behavior verification.
- Run `npm run verify` from `package/` for the complete package gate.

## Site Workflow

- The docs/demo app lives in `site/`.
- The site depends on the local package via `tinywidgets: "file:../package"`.
- Important scripts in `site/package.json`:
  - `bun run buildApi`: regenerate `site/src/pages/_api.tsx`
  - `bun run buildApiWatch`: watch `package/src` and continuously regenerate API docs
  - `bun run dev`: regenerate API docs once, then start Vite
  - `bun run prePublish`: regenerate API docs, then run formatting, lint, typecheck, and production build
- If you change public package APIs or JSDoc, rebuild the site API output before assuming the docs are current.
- If a task touches docs rendering, API examples, or navigation, verify in `site/`, not just `package/`.

## Change Checklist

When adding or updating a component in `package/`, verify:

- the component has `index.tsx` and `index.css.ts`
- it uses shared helpers/tokens where possible
- it is exported from `package/src/index.ts`
- its JSDoc is complete enough for `site/buildApi.ts`
- variant names and props match the existing TinyWidgets style
- docs/examples reflect the actual API
- if the API surface or JSDoc changed, `site/src/pages/_api.tsx` has been regenerated
