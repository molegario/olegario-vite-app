import { Link } from 'react-router-dom';
import classes from './Post.module.scss';

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
  return <li className={classes.post}>
    <p className={classes.author}><Link to={`/${id}`}>{author}</Link></p>
    <p className={classes.text}>{body}</p>
  </li>
}

export default Post;