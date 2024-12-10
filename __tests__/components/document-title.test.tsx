import * as React from "react";
import { createRoot } from 'react-dom/client';
import {act} from 'react';
import {DocumentTitle} from "../../src/components";

(global as any).IS_REACT_ACT_ENVIRONMENT = true

test("<DocumentTitle />", () => {
    const newTitle = `<DocumentTitle> test case`;
    act(() => {
        const root = createRoot(document.head);
        root.render(<DocumentTitle data-x="s">{newTitle}</DocumentTitle>);
    });
    expect(document.title).toEqual(newTitle);
    expect(document.head).toMatchSnapshot();
});
