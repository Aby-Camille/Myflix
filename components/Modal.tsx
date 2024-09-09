import React, { useState } from "react";

export default function Modal() {

    const open = () => {
      const dialog: HTMLDialogElement | null = document.querySelector('dialog');
      dialog?.showModal();
    }

    const close = () => {
      const dialog: HTMLDialogElement | null = document.querySelector('dialog');
      dialog?.close();
    }
  
    return (
      
      <dialog className="bg-black bg-opacity-50">
        <header>
          <p>description</p>
          <button>Close</button>
        </header>
        <div>
          des trucs
        </div>
        <footer>
          footer
        </footer>
      </dialog>
    );
  };

