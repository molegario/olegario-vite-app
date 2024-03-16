import classes from './Post.module.scss';

export interface PostProps {
  author: string;
  body: string;
}

function Post({
  author,
  body,
}:PostProps) {
  return <li className={classes.post}>
    <p className={classes.author}>{author}</p>
    <p className={classes.text}>{body}</p>
  </li>
}
export default Post;