import React, { Dispatch, SetStateAction, useState } from "react";
import Portal from "components/Portal";
import styles from "./Modal.module.css";

type ModalProps = {
  children: JSX.Element;
  activator: (param: { setShow: Dispatch<SetStateAction<boolean>> }) => void;
};

export const Modal: React.FC<ModalProps> = ({ children, activator }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {activator({ setShow })}
      <Portal>
        {show && (
          <div className={styles.wrapper}>
            <span id="blackOverlay" className={styles.backdrop}></span>
            <div className={styles.modal}>{React.cloneElement(children, { setShow })}</div>
          </div>
        )}
      </Portal>
    </>
  );
};
