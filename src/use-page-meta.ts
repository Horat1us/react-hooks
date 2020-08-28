import * as React from "react";

export function usePageMeta(name: string, value: string): void {
    React.useEffect(() => {
        let metaElement: HTMLMetaElement | null = document.querySelector(`meta[name=${name}]`);
        if (metaElement) {
            const previousContent = metaElement.getAttribute("content");
            metaElement.setAttribute("content", value);
            return () => {
                metaElement && metaElement.setAttribute("content", previousContent ?? "");
            }
        }
        metaElement = document.createElement("meta");
        metaElement.name = name;
        metaElement.content = value;
        document.head.appendChild(metaElement);
        return () => {
            metaElement && document.head.removeChild(metaElement);
        }
    }, [name, value]);
}
