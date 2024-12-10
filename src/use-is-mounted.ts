import * as React from "react";

export const useIsMounted = () => {
    var isMounted = React.useRef(true);
    React.useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted.current;
}
