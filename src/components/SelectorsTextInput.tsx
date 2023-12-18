import { ChangeEvent, useRef } from "react";
import "../assets/css/TextInput.css";
import useSaveInMemory from "../hooks/useSaveInMemoryToExtension"

interface TextInputProps {
    id: string,
    initialValue?: string
    placeholder?: string
}

export default function TextInput(this: unknown, { id, placeholder = "", initialValue = "" }: TextInputProps) {
    const input = useRef<HTMLInputElement>(null)
    const { stateElementLoading, stateData, handlerData } = useSaveInMemory({ id, initialValue })

    const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        handlerData(event.target.value)()
    }

    const handlerInputReset = () => {
        if (input.current) {
            input.current.value = initialValue;
            handlerData(initialValue)();
          }
    }

    return (
        <>
            {
                stateElementLoading &&
                <div className="TextInput">
                    {/* color green if exist element, color red if not exist element */}
                    <input ref={input} type="text" onChange={handlerInput} defaultValue={stateData} placeholder={placeholder} />
                    <button onClick={handlerInputReset}>↺</button>
                </div>
            }
        </>
    )
}