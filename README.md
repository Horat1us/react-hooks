# React Hooks
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

## Contributors
- [Alexander <Horat1us> Letnikow](https://github.com/Horat1us)

## License
[MIT](./LICENSE)
