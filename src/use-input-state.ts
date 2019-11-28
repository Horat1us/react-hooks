import * as React from "react";

export type InputStateHook<I extends HTMLInputElement = HTMLInputElement, S extends React.HTMLProps<I>["value"] = string> =
    (initialState?: S) => [S, React.Dispatch<React.ChangeEvent<I>>, React.Dispatch<React.SetStateAction<S>>];
export const useInputState: InputStateHook = (initialState = "") => {
    const [state, setState] = React.useState(initialState);
    const handleChange = React.useCallback(
        ({ target: { value } }) => setState(value),
        [setState]
    );
    return [state, handleChange, setState];
};
