import * as React from "react";

export const useInterval = (handler?: () => void, timeout?: number): void =>{
    React.useEffect(() => {
        if (!handler) {
            return;
        }
        const id = setInterval(handler, timeout);
        return () => clearInterval(id);
    }, [handler, timeout]);
};
