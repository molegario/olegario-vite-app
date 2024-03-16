import { useCallback } from 'react';
import classes from './MainHeader.module.scss';
import {
  MdPostAdd,
  MdMessage
} from 'react-icons/md'

interface MainHeaderProps {
  onAddClick: ()=>void;
}

function MainHeader ({
  onAddClick
}:MainHeaderProps) {

  const onAddBtnClick = useCallback(
    (evt: { preventDefault: () => void; })=>{
      evt.preventDefault();
      onAddClick();
    },
    [onAddClick]
  );

  return <header className={classes.header}>
    <h1
      className={classes.logo}
    >
      <MdMessage />
      React Poster
    </h1>
    <p>
      <button
        className={classes.button}
        onClick={onAddBtnClick}
      >
        <MdPostAdd size={18} />
        New Post
      </button>
    </p>
  </header>;
}

export default MainHeader;