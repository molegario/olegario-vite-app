import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
  children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
  hideModalHandler?: ()=>void;
}

function Modal (props: ModalProps) {
  return <>
    <div className={classes.backdrop} onClick={props.hideModalHandler}/>
    <dialog open className={classes.modal}>
      {props.children}
    </dialog>
  </>;
}

export default Modal;