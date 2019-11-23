import * as React from "react";

export type TimeoutId = number | undefined;
export type setTimeoutId = (value: TimeoutId) => void;

export const useTimeout = (): [ TimeoutId, setTimeoutId ] => {
    const [ id, setId ] = React.useState<TimeoutId>(undefined);
    React.useEffect(
        () => () => {
            if (!id) {
                return;
            }
            clearTimeout(id);
        },
        [ id ]
    );
    return [ id, setId ];
};
