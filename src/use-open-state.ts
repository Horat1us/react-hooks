import * as React from "react";

export const openStateReducer: React.Reducer<boolean, any> = (prevState) => !prevState;
export const useOpenState = (initialState: boolean = false): [boolean, () => void] => {
    return React.useReducer<React.Reducer<boolean, any>>(
        openStateReducer,
        initialState
    ) as [boolean, () => void];
};
