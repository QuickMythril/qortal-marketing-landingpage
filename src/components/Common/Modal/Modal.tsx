import { FC, useEffect, useRef } from "react";
import { Backdrop, Modalbody } from "./Modal-styles";

interface ModalProps {
  children: React.ReactNode;
  toggleLeft?: React.ReactNode;
  toggleRight?: React.ReactNode;
  openModal: boolean;
  onClickFunc: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Modal: FC<ModalProps> = ({
  onClickFunc,
  children,
  openModal,
  toggleLeft,
  toggleRight,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      (modalRef.current as any).focus();
    }
    return () => {
      if (modalRef.current) {
        (modalRef.current as any).blur();
      }
    };
  }, []);

  // useEffect to hide the body when the mobile side drawer is open

  useEffect(() => {
    if (openModal) {
      document.body.style.cssText = "overflow-y: hidden !important;";
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [openModal]);

  return (
    <div>
      <Backdrop
        ref={modalRef}
        tabIndex={-1}
        onClick={(e: any) => {
          onClickFunc(e);
        }}
      >
        {toggleLeft}
        {toggleRight}
      </Backdrop>
      <Modalbody>{children}</Modalbody>
    </div>
  );
};

export default Modal;
