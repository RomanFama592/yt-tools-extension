import "../assets/css/Modal.css"
import { SyntheticEvent, useContext, useRef } from "react"
import { ModalContext } from "../context/HandlerModal.tsx"

export default function Modal() {

    const refModalBG = useRef(null)
    const contextModal = useContext(ModalContext)

    if (contextModal === undefined) {
        return null
    }

    const { setModalState, modalContent } = contextModal

    const handlerClose = () => {
        setModalState(false)
    }

    return (
        <div ref={refModalBG} className="modal-background" onClick={(event: SyntheticEvent) => { if (event.target === refModalBG.current) handlerClose() }}>
            <div className="modal-content">
                <button className="x-close" onClick={handlerClose}>{"X"}</button>
                {modalContent}
            </div>
        </div>
    )
}