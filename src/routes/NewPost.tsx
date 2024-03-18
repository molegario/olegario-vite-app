import classes from "./NewPost.module.scss";
import Modal from "../components/Modal";
import { Link, Form } from "react-router-dom";
import { LoaderFunctionArgs, redirect } from 'react-router-dom';

function NewPost() {

  return (
    <Modal >
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button type="submit">Add Post</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }: LoaderFunctionArgs) {
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