import * as React from "react";
import * as ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import {DocumentTitle} from "../../src/components";

test("<DocumentTitle />", () => {
    const newTitle = `<DocumentTitle> test case`;
    act(() => {
        ReactDOM.render(<DocumentTitle data-x="s">{newTitle}</DocumentTitle>, document.head);
    });
    expect(document.title).toEqual(newTitle);
    expect(document.head).toMatchSnapshot();
});


