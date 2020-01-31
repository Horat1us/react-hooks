import * as React from "react";

export function useScrollEffect(element: HTMLElement | null | undefined) {
    React.useEffect(() => {
        if (!element) {
            return;
        }
        const observer = new MutationObserver(() => {
            element.scrollTo({top: element.scrollHeight, behavior: "smooth"})
        });
        observer.observe(element, {childList: true, subtree: true});
        return () => observer.disconnect();
    }, [element]);
}
