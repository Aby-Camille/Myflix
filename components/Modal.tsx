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

        <div className="fixed top-0 right-0 left-0 bottom-0 h-screen w-screen">
          <div className="top-0 right-0 left-0 bottom-0 w-screen h-screen bg-black bg-opacity-50"></div>
          <div className="absolute">
            <p>description</p>
            <button>Close</button>
          </div>
        </div>

      </>
    );
  };

