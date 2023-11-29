import { useState, useEffect } from "react";

export default function useSaveInMemoryToExtension<T>({ id, initialValue }: { id: string, initialValue: T }) {
    
    const [stateData, setData] = useState(initialValue);
    const [stateElementLoading, setElementLoading] = useState(false);

    useEffect(() => {
        chrome.storage.local.get(id, (data) => {
            if (data[id] !== undefined) {
                setData(data[id]);
            } else {
                chrome.storage.local.set({ [id]: initialValue });
            }
            setElementLoading(true)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handlerData(value: T) {
        return (async () => {
            await chrome.storage.local.set({ [id]: value })
            setData(value)
        })
    }

    return { stateData, stateElementLoading, setData, handlerData }
}