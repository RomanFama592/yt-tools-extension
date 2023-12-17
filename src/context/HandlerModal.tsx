import { ReactNode, SyntheticEvent, createContext, useState, ReactElement, Dispatch, SetStateAction } from "react";

// Define the properties expected in the context
interface HandlerModalContextProps {
    modalState: boolean;
    modalContent: ReactNode;
    setModalState: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<ReactElement>>;
    createHandlerModal: (elementValid: string[]) => (event: SyntheticEvent) => void;
}

// Create the context with the specified properties or undefined
export const ModalContext = createContext<HandlerModalContextProps | undefined>(undefined);

// Provider component that will wrap its children and provide the context values
export function HandlerModalProvider({ children }: { children: ReactNode }) {

    // State for managing modal visibility and content
    const [modalState, setModalState] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    // Function to create a modal event handler based on element validation
    const createHandlerModal = (elementValid: string[]) => {
        const handlerModal = (event: SyntheticEvent) => {
            // Check if the target is not included in the valid elements
            if (!elementValid.includes(String(event.target))) {
                // Show the modal
                setModalState(true);
            } else {
                // Stop event propagation for valid elements
                event.stopPropagation();
            }
        };

        return handlerModal;
    };

    // Context value containing modal state, content, setters, and the modal event handler creator
    const contextValue: HandlerModalContextProps = {
        modalState,
        modalContent,
        setModalState,
        setModalContent,
        createHandlerModal,
    };

    // Provide the context to its children
    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
}
