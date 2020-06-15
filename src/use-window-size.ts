import * as React from "react";

export type WindowSize = [number, number];
/** width, height */
export type WindowSizeState = WindowSize | undefined;

export type WindowSizeReducer = React.ReducerWithoutAction<WindowSizeState>;
export const WindowSizeReducer: WindowSizeReducer = (prevState) => {
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

export function useWindowSize(): WindowSizeState {
    const [size, dispatch] = React.useReducer<WindowSizeReducer, WindowSizeState>(
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
