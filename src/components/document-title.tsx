import * as React from "react";

import {useDocumentTitleEffect} from "../use-document-title-effect";
import {ForwardRefRenderFunction} from "react";

export type DocumentTitleProps = React.HTMLProps<HTMLTitleElement> & {
    children: string;
}

export const DocumentTitle = React.memo(React.forwardRef<HTMLTitleElement, DocumentTitleProps>(
    (props, ref) => <title {...props} ref={ref}/>
));
DocumentTitle.displayName = "RH.DocumentTitle";
