import {useDocumentTitleEffect} from "./use-document-title-effect";
import {usePageMeta} from "./use-page-meta";

export function usePageInfo(title: string, description: string) {
    useDocumentTitleEffect(title);
    usePageMeta("description", description);
}
