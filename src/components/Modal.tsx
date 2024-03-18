import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom'

interface ModalProps {
  children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

function Modal (props: ModalProps) {
  const navigate = useNavigate();

  function hideModalHandler () {
    navigate('..');
  }

  return <>
    <div className={classes.backdrop} onClick={hideModalHandler}/>
    <dialog open className={classes.modal}>
      {props.children}
    </dialog>
  </>;
}

export default Modal;