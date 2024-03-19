import { useNavigate } from 'react-router-dom';
import classes from './Post.module.scss';
import { useCallback } from 'react';

export interface PostProps {
  id: string;
  author: string;
  body: string;
}

function Post({
  author,
  body,
  id,
}:PostProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => {
      navigate(`/${id}`);
    },
    [navigate, id]
  );

  return <li className={classes.post} onClick={handleClick}>
    <p className={classes.author}>{author}</p>
    <p className={classes.text}>{body}</p>
  </li>
}

export default Post;