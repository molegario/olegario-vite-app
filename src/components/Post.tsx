// import { useNavigate } from 'react-router-dom';
import classes from './Post.module.scss';
import { useCallback } from 'react';

export interface PostProps {
  id: string;
  author: string;
  body: string;
  navigationHandler: (id:string)=>void
}

function Post({
  author,
  body,
  id,
  navigationHandler
}:PostProps) {
  const handleClick = useCallback(
    () => {
      navigationHandler(id);
    },
    [navigationHandler, id]
  );

  return <li className={classes.post} onClick={handleClick}>
    <p className={classes.author}>{author}</p>
    <p className={classes.text}>{body}</p>
  </li>
}

export default Post;