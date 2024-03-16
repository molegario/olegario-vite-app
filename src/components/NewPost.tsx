import { useCallback } from "react";
import classes from "./NewPost.module.scss";
import { PostProps } from "./Post";

export interface NewPostProps {
  newPost: PostProps;
  setNewPost: (post:{
    author?:string;
    body?:string;
  })=>void;
  setAuthors: ()=>void;
  hideModalHandler: ()=>void;
}

function NewPost({
  newPost,
  setNewPost,
  setAuthors,
  hideModalHandler,
}:NewPostProps) {

  const changeBodyHandler = useCallback(
    (event: {
      target: {
        value: string
      }
    }) => {
      setNewPost({
        body: event?.target.value
      });
    },
    [setNewPost]
  )

  const changeAuthorHandler = useCallback(
    (event: {
      target: {
        value: string
      }
    }) => {
      setNewPost({
        author: event?.target.value
      });
    },
    [setNewPost]
  )

  const addAuthorHandler = useCallback(
    (evt: {
      preventDefault: ()=>void
    }) => {
      evt.preventDefault();
      setAuthors();
      hideModalHandler();
    },
    [setAuthors, hideModalHandler]
  )

  const onCancelHandler = useCallback(
    (evt: {
      preventDefault: ()=>void
    }) => {
      evt.preventDefault();
      setNewPost({
        author: '',
        body: ''
      });
      hideModalHandler();
    },
    [setAuthors, hideModalHandler]
  )

  return (
    <form className={classes.form} onSubmit={addAuthorHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} value={newPost?.body}></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required value={newPost?.author} onChange={changeAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Post</button>
      </p>
    </form>
  );
}

export default NewPost;