import classes from "./NewPost.module.scss";
import classNames from "classnames";
import Modal from "../components/Modal";
import { Link, Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { useState } from "react";
// import { LoaderFunctionArgs, redirect } from 'react-router-dom';

function NewPost() {
  const [isProcessing, setIsProcessing] = useState(false);

  // const handleSubmitClick = useCallback(
  //   ()=>{
  //     setIsProcessing(true);
  //   },
  //   [setIsProcessing]
  // );
  function handleSubmitClick() {
    setIsProcessing(true); //resets because action redirects away
  } 

  return (
    <Modal>
      <Form 
        method='post' 
        className={
          classNames(
            classes.form, 
            {
              [`${classes.processing}`]: isProcessing
            }
          )  
        } 
        onSubmit={handleSubmitClick}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} disabled={isProcessing}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" disabled={isProcessing} required />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button type="submit" disabled={isProcessing}>Add Post</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/');
}