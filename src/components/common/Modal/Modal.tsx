/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop } from "./Backdrop";
import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  setShowModal: (show: boolean) => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ setShowModal, children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  //   Handle Close Modal

  const closeModal = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  return (
    <>
      <Backdrop showBackdrop={showContent} closeModal={closeModal} />
      <div className={`modal ${showContent && "showModal"}`}>
        <div onClick={closeModal} className="modal__closeButton">
          <span className="closeButton__text">&times;</span>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </>
  );
};
