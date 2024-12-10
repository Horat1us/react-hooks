/**
 * @jest-environment jsdom
 */

import * as React from "react";

export const usePrint = (): [(el: HTMLElement | null) => void, () => void,] => {
    const [element, setElement] = React.useState<HTMLElement | null>(null);
    const handleClick = React.useCallback(() => {
        if (!element) {
            return;
        }
        const el = document.createElement("div");
        el.className = 'printable';
        el.innerHTML = element.innerHTML;
        document.body.appendChild(el);
        window.print();
        document.body.removeChild(el);
    }, [element]);

    return [setElement, handleClick];
};