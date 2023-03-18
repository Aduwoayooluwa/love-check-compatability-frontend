import Error from "@/Layout/Error";
import Message from "@/Layout/Message";
import { BlurModal } from "@/container/Modal";
import React, { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const [modalTitle, setModalTitle] = useState("")
    const [mName, setMname] = useState("")
    const [pName, setPname] = useState("")
    const [errorTitle, setErrorTitle] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isErrorOpen, setIsErrorOpen] = useState(false)
    return (
        <ModalContext.Provider value={{
            isModalOpen, setIsModalOpen, isMessageOpen, 
            setIsMessageOpen,
            modalMessage, setModalMessage,
            modalTitle, setModalTitle,
            mName, setMname,
            pName, setPname,
            errorTitle, setErrorTitle,
            errorMessage, setErrorMessage,
            isErrorOpen, setIsErrorOpen
        }}>
            <BlurModal
                    isModalOpen={isMessageOpen}
                    onClose={() => {
                        setIsMessageOpen(false)
                        setIsModalOpen(false)
                    }}>
                        <Message mName={mName} pName={pName} title={modalTitle} message={modalMessage}/>
                    </BlurModal>

                    <BlurModal
                    isModalOpen={isErrorOpen}
                    onClose={() => {
                        setIsErrorOpen(false)
                        setIsModalOpen(false)
                    }}>
                        <Error title={errorTitle} message={errorMessage}/>
                    </BlurModal>
            { children }
        </ModalContext.Provider>
    )
}

export default  ModalProvider;