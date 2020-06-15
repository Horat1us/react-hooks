import * as React from "react";

export function useDocumentTitleEffect(title: string): void {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
}

export const DocumentTitle: React.FC<{
    value: string;
}> = React.memo(({value}) => {
    useDocumentTitleEffect(value);
    return null;
});
