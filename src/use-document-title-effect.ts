import * as React from "react";

export function useDocumentTitleEffect(title: string): void {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
}
