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

    return (
        <ModalContext.Provider value={{
            isModalOpen, setIsModalOpen, isMessageOpen, 
            setIsMessageOpen,
            modalMessage, setModalMessage,
            modalTitle, setModalTitle,
            mName, setMname,
            pName, setPname
        }}>
            <BlurModal
                    isModalOpen={isMessageOpen}
                    onClose={() => {
                        setIsMessageOpen(false)
                        setIsModalOpen(false)
                    }}>
                        <Message mName={mName} pName={pName} title={modalTitle} message={modalMessage}/>
                    </BlurModal>
            { children }
        </ModalContext.Provider>
    )
}

export default  ModalProvider;