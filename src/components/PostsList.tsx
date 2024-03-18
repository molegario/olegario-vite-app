import { useLoaderData } from 'react-router-dom';
import { PostProps } from "./Post";
import Post from "./Post";
import classes from "./PostsList.module.scss";

function PostsList () {

  const posts = useLoaderData() as PostProps[];

  return <>
    {
      posts.length > 0 && 
        <ul className={classes.posts}>
          {
            [...posts].reverse().map(
              (itm)=><Post key={'post_' + itm.id} {...itm}/>
            )
          }
        </ul>
    }
    {
      posts.length === 0 && 
      <div
        style={{
          textAlign: 'center',
          color: 'white'
        }}
      >
        <h2>There are currently no posts available.</h2>
      </div>
    }
  </>
}
export default PostsList;