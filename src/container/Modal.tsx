import React from 'react'
import { createPortal } from 'react-dom'

type BlurProps = {
    isModalOpen: any
    onClose: any
    children: React.ReactElement
}

export const BlurModal = ({ isModalOpen, onClose, children }: BlurProps) => {
    if (!isModalOpen) {
    return null;
    }

    return createPortal(
        <section className="  ">
        <div
            className="fixed h-screen w-screen z-[52] top-0 left-0  backdrop-blur-[5px] backdrop-brightness-50 "
            onClick={onClose}
        ></div>
        <div
          // onWheel={() => {
          //   return false;
          // }}
            className=" absolute z-[55] top-1/2 left-1/2 -translate-x-1/2 -translate-y-72
            p-5"
        >
            {children}
        </div>
        </section>,
    document.getElementById("root-modal")!
);
};

