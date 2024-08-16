import React from "react";
import { useState, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
  };

  const Modal: React.FC<ModalProps> = ({ isOpen, hasCloseBtn, onClose, children }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);
  
    return (
      <dialog ref={modalRef} className="modal">
        {children}
      </dialog>
    );
  };

export default Modal;