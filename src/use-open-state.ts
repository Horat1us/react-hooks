import * as React from "react";

export const openStateReducer = (prevState: boolean): boolean => !prevState;
export const useOpenState = (initialState: boolean = false): [boolean, () => void] => {
    return React.useReducer<boolean, []>(
        openStateReducer,
        initialState
    ) as [boolean, () => void];
};
