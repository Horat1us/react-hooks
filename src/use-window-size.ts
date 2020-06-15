import * as React from "react";

export type WindowSize = [number, number] | [undefined, undefined];
export type WindowSizeReducer = React.ReducerWithoutAction<WindowSize>;
export const WindowSizeReducer = (prevState: WindowSize = [undefined, undefined]): WindowSize => {
    if ("object" !== typeof window) {
        return prevState;
    }
    if ((prevState !== undefined)
        && (prevState[0] === window.innerWidth)
        && (prevState[1] === window.innerHeight)
    ) {
        return prevState;
    }
    return [window.innerWidth, window.innerHeight];
};

export function useWindowSize(): WindowSize {
    const [size, dispatch] = React.useReducer<WindowSizeReducer, undefined>(
        WindowSizeReducer,
        undefined,
        WindowSizeReducer
    );

    React.useEffect(() => {
        window.addEventListener("resize", dispatch);
        return () => window.removeEventListener("resize", dispatch);
    }, []);

    return size;
}
