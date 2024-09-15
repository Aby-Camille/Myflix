import React, { useEffect } from "react";

interface Props {
  opened: boolean,
  closing: Function
}

export default function Modal({ opened, closing }: Props) {

  useEffect(() => {  
    const dialog: HTMLDialogElement | null = document.querySelector('dialog');
    console.log(opened);
    
    if (opened) {
      dialog?.showModal();
      return;
    }

    dialog?.close();
  }, [opened])

  function close() {
    closing();
    const dialog: HTMLDialogElement | null = document.querySelector('dialog');
    dialog?.close();
  }
  
    return (
      <dialog className="bg-black bg-opacity-50 text-white">
        <header className="flex justify-between items-center">
          <p>description</p>
          <button onClick={close}>Close</button>
        </header>
        <div>
          des trucs
        </div>
      </dialog>
    );
  };

