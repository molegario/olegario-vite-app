import { useLoaderData, useNavigate } from 'react-router-dom';
import { PostProps } from "./Post";
import Post from "./Post";
import classes from "./PostsList.module.scss";
import { useCallback } from 'react';

function PostsList () {
  const navigate = useNavigate();

  const posts = useLoaderData() as PostProps[];

  const handleNavigate = useCallback(
    (id:string)=>{
      navigate(`/${id}`);
    },
    [navigate]
  );

  return <>
    {
      posts.length > 0 && 
        <ul className={classes.posts}>
          {
            [...posts].map(
              (itm)=><Post key={'post_' + itm.id} {...itm} navigationHandler={handleNavigate}/>
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