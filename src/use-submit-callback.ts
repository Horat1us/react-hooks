import * as React from "react";

export type SubmitCallbackHook = (
    callback: () => void,
    deps?: any[],
) => React.FormEventHandler;
export const useSubmitCallback: SubmitCallbackHook = (callback, deps = []) => {
    const eventHandler: React.FormEventHandler = (event: React.FormEvent) => {
        event.preventDefault();
        callback();
    };
    return React.useCallback(eventHandler, [callback].concat(deps));
};
