import * as React from "react";

export type InputFilter = (rawInput: string) => string;
export type InputType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type InputStateHook<I extends InputType = InputType, S extends React.HTMLProps<I>["value"] = string> =
    (initialState?: S, inputFilter?: InputFilter) => [S, React.Dispatch<React.ChangeEvent<I>>, React.Dispatch<React.SetStateAction<S>>];

export const useInputState: InputStateHook = <I extends InputType = InputType>(
    initialState = "",
    inputFilter?: InputFilter
) => {
    const [state, setState] = React.useState(initialState);
    const handleChange = React.useCallback(
        ({target: {value}}: React.ChangeEvent<I>) => setState(inputFilter ? inputFilter(value) : value),
        [setState, inputFilter]
    );
    return [state, handleChange, setState];
};
