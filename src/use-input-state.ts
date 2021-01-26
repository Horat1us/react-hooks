import * as React from "react";

export type InputFilter = (rawInput: string) => string;
export type InputType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type InputStateHook<I extends InputType = InputType, S extends React.HTMLProps<I>["value"] = string> =
    (initialState?: S, inputFilter?: InputFilter) => [S, React.Dispatch<React.ChangeEvent<I>>, React.Dispatch<React.SetStateAction<S>>];

export const useInputState: InputStateHook = (initialState = "", inputFilter) => {
    const [state, setState] = React.useState(initialState);
    const handleChange = React.useCallback(
        ({ target: { value } }) => setState(inputFilter ? inputFilter(value) : value),
        [setState, inputFilter]
    );
    return [state, handleChange, setState];
};
