import * as React from "react";

export function useWindowWidth() {
    const [width, setWidth] = React.useState<number | undefined>(undefined);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [ setWidth ]);

    return width;
}
