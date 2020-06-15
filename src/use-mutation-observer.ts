import * as React from "react";

export function useMutationObserver<E extends HTMLElement = HTMLElement>(
    cb: (...args: Parameters<MutationCallback>) => ReturnType<React.EffectCallback>
): [E | null, (element: E | null) => void] {
    const [ref, setRef] = React.useState<E | null>(null);

    React.useEffect(() => {
        if (!ref) {
            return;
        }
        let cancelCallback = () => observer.disconnect();
        const observer = new MutationObserver((...args: Parameters<MutationCallback>) => {
            const observerCancelCallback = cb(...args);
            if (observerCancelCallback) {
                const mutationCancelCallback = cancelCallback;
                cancelCallback = () => {
                    mutationCancelCallback();
                    observerCancelCallback();
                };
            }
        });
        observer.observe(ref, {childList: true, subtree: true});
        return cancelCallback;
    }, [ref, cb]);

    return [ref, setRef];
}
