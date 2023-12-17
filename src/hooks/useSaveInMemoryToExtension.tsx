import { useState, useEffect } from "react";

export default function useSaveInMemoryToExtension<T>({ id, initialValue }: { id: string, initialValue: T }) {

    const [stateData, setData] = useState(initialValue);
    const [stateElementLoading, setElementLoading] = useState(false);

    useEffect(() => {
        chrome.storage.sync.get(id, (data) => {
            if (data[id] !== undefined) {
                setData(data[id]);
            } else {
                chrome.storage.sync.set({ [id]: initialValue });
            }
            setElementLoading(true)
        });
    }, [id, initialValue]);

    function handlerData(value: T) {
        return (async () => {
            await chrome.storage.sync.set({ [id]: value })
            setData(value)
        })
    }

    return { stateData, stateElementLoading, setData, handlerData }
}