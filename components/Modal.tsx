import React from "react";
import { FaInfo } from "react-icons/fa6";
import { useState } from "react";


export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal)
    }
  
    return (
      <>
        <button onClick={toggleModal} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
          <FaInfo size={15} />
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

