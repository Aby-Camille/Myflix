import React from "react";
import { useState } from "react";


export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }
  
    return (
      <>
        <button onClick={toggleModal}>
          Open
        </button>
      </>
    );
  };

