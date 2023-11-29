import "../assets/css/Switch.css";
import useSaveInMemory from "../hooks/useSaveInMemoryToExtension"

export default function Input({ id }: { id: string }) {
    const { stateElementLoading, stateData, handlerData } = useSaveInMemory({ id, initialValue: true })

    const handlerCheckbox = handlerData(!stateData)

    return (
        <>
            {
                stateElementLoading &&
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={stateData}
                            onChange={handlerCheckbox}
                        />
                        <span className="slider"></span>
                    </label>
            }
        </>
    )
}