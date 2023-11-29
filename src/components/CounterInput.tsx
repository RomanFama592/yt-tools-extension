import "../assets/css/CounterInput.css";
import useSaveInMemory from "../hooks/useSaveInMemoryToExtension"

export default function CounterInput({ id }: { id: string }) {
    const { stateElementLoading, stateData, handlerData } = useSaveInMemory({ id, initialValue: 1 })

    const handlerMinusCounter = handlerData(stateData > 1 ? stateData - 1 : stateData)
    const handlerPlusCounter = handlerData(stateData + 1)

    return (
        <>
            {
                stateElementLoading &&
                <div className="CounterInput">
                    <button onClick={handlerMinusCounter}>-</button>
                    <span>{stateData}s</span>
                    <button onClick={handlerPlusCounter}>+</button>
                </div>
            }
        </>
    )
}