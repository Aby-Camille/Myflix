import React from "react";
import { useState } from "react";


export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
          Open
        </button>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p>description</p>
          </div>
        </div>

      </>
    );
  };

