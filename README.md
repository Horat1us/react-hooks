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
        <button className={isOpen ? "is-open" : "is-close"}>
            {isOpen ? "Close" : "Open"}
        </button>
    );
};
```

## Contents
- [useOpenState](./src/use-open-state.ts)
- [useWindowWidth](./src/use-window-width.ts)

## Contributors
- [Alexander <Horat1us> Letnikow](https://github.com/Horat1us)

## License
[MIT](./LICENSE)
