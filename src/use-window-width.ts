import * as React from "react";

export function useWindowWidth() {
    const [width, handleResize] = React.useReducer<number | undefined, []>(
        (): number => window.innerWidth,
        ("object" === typeof window) ? window.innerWidth : undefined
    );

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
