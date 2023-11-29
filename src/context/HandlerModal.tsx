import { ReactNode, SyntheticEvent, createContext, useState, ReactElement } from "react";

interface HandlerModalContextProps {
    modalState: boolean;
    modalContent: ReactNode;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    setModalContent: React.Dispatch<React.SetStateAction<ReactElement>>;
    createHandlerModal: (elementValid: string[]) => (event: SyntheticEvent) => void;
}

export const ModalContext = createContext<HandlerModalContextProps | undefined>(undefined)

export function HandlerModalProvider({ children }: { children: ReactNode }) {

    const [modalState, setModalState] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    const createHandlerModal = (elementValid: string[]) => {
        const handlerModal = (event: SyntheticEvent) => {
            console.log(String(event.target))
            if (!elementValid.includes(String(event.target))) {
                setModalState(true)
            } else {
                event.stopPropagation();
            }
        }

        return handlerModal
    }

    const contextValue: HandlerModalContextProps = {
        modalState,
        modalContent,
        setModalState,
        setModalContent,
        createHandlerModal,
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
}