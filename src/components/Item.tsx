import "../assets/css/Item.css";
import Options from "../assets/ts/options.ts";
import { ReactNode, SyntheticEvent, useContext } from "react";
import { ModalContext } from "../context/HandlerModal.tsx";

interface ItemProps {
    children?: ReactNode
    id: string;
    handlerModal?: (event: SyntheticEvent) => void;
    contentModal?: ReactNode
}

export default function Item({ children, id, handlerModal, contentModal }: ItemProps) {
    const { title, description } = Options[id];
    const className = `item ${contentModal !== undefined ? "pointer" : ""}`

    const contextUsedModal = useContext(ModalContext)

    if (contextUsedModal === undefined) {
        return null
    }

    const { setModalContent } = contextUsedModal

    const constructorContentModal = () => {
        return ((event: SyntheticEvent) => {
            if (!contentModal) {
                return;
            }
            setModalContent(
                <div className="modal-header">
                    <h2 className="title" title={title}>{title}</h2>
                    <p className="description" title={description}>{description}</p>
                    {contentModal}
                </div>
            )
            if (handlerModal) handlerModal(event)
        })
    }

    return (
        <div className={className} onClick={constructorContentModal()}>
            <div className="info">
                <h2 className="title" title={title}>{title}</h2>
                <p className="description" title={description}>{description}</p>
            </div>
            {children}
        </div>
    );
}