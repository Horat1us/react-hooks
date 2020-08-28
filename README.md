# React Hooks
[![npm version](https://badge.fury.io/js/%40horat1us%2Freact-hooks.svg)](https://badge.fury.io/js/%40horat1us%2Freact-hooks)
[![Build Status](https://travis-ci.org/Horat1us/react-hooks.svg?branch=master)](https://travis-ci.org/Horat1us/react-hooks)


Collection of React Hooks and Utils

## Install
```bash
npm i @horat1us/react-hooks
```

## Usage
```typescript jsx
import { useOpenState } from "./src";

export const Component = () => {
    const [isOpen, changeOpenState] = useOpenState();
    return (
        <button className={isOpen ? "is-open" : "is-close"} onClick={changeOpenState}>
            {isOpen ? "Close" : "Open"}
        </button>
    );
};
```

## Contents
- [useOpenState](./src/use-open-state.ts)
- [useWindowWidth](./src/use-window-width.ts)
- [useWindowSize](./src/use-window-size.ts)
- [useInterval](./src/use-interval.ts)
- [useTimeout](./src/use-timeout.ts)
- [useSubmitCallback](./src/use-submit-callback.ts) - handle FormEvent with custom callback
and `event.preventDefault()` call.
- [useInputState](./src/use-input-state.ts) - controlling input value using state and onChange callback.
- [useScrollEffect](./src/use-scroll-effect.ts) - auto scroll to element bottom on changes
- [useMutationObserver](./src/use-mutation-observer.ts) - MutationObserver effect hook with HTMLElement state
- [useDocumentTitleEffect](./src/use-document-title-effect.ts) - auto scroll to element bottom on changes.
Can be used as stateless component:
```jsx harmony
<DocumentTitle value="string" />
  ```
- [usePageMeta](./src/use-page-meta.ts) - changes or adds meta tag.
- [usePageInfo](./src/use-page-info.ts) - combines useDocumentTitleEffect and usePageMeta.

- [usePrint](./src/use-input-state.ts) - prints selected DOM element.
When use you may use [printable.min.css](./styles/printable.min.css).

## Contributors
- [Alexander <Horat1us> Letnikow](https://github.com/Horat1us)

## License
[MIT](./LICENSE)
