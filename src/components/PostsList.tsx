import { useCallback, useState } from "react";
import NewPost from "./NewPost";
import { PostProps } from "./Post";
import Post from "./Post";
import classes from "./PostsList.module.scss";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

// const TestAuthorsList: PostProps[] = [
//   {
//     author: 'M.Olegario',
//     body: 'Wunderbar',
//   },
//   {
//     author: 'RR.Martin',
//     body: 'Winter is coming',
//   },
//   {
//     author: 'B.Baxton',
//     body: 'BOOYAAAH!!!',
//   },
//   {
//     author: 'L.Jenkins',
//     body: 'LEEROY KEEEENNKINS!!!!',
//   },
//   {
//     author: 'L.LupinXXX',
//     body: 'merde.',
//   },
// ];

function PostsList () {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [authors, setAuthors] = useState<PostProps[]>([]);
  const [newPost, setNewPost] = useState<PostProps>({
    author: '',
    body: ''
  });

  const addAuthor = useCallback(
    () => {
      setAuthors(authors=>[
        ...authors,
        newPost
      ]);
      setNewPost({
        author: '',
        body: ''
      });
    },
    [authors, newPost, setNewPost, setAuthors]
  );

  const updatePost = useCallback(
    (updatedPost:{
      author?:string;
      body?:string;
    })=>{
      setNewPost(currentPost => ({
        ...currentPost,
        ...updatedPost
      }));
    },
    [
      setNewPost
    ]
  );

  const hideModalHandler = useCallback(
    ()=>{
      setModalIsVisible(false);
    },
    [setModalIsVisible]
  );

  const showModalHandler = useCallback(
    ()=>{
      setModalIsVisible(true);
    },
    [setModalIsVisible]
  );

  return <>
    {
      modalIsVisible &&
      <Modal hideModalHandler={hideModalHandler}>
        <NewPost newPost={newPost} setNewPost={updatePost} setAuthors={addAuthor} hideModalHandler={hideModalHandler}/>
      </Modal>
    }
    <MainHeader 
      onAddClick={showModalHandler}
    />
    {
      authors.length > 0 && 
        <ul className={classes.posts}>
          {
            (newPost.author.length > 0 || newPost.body.length > 0) &&
            <Post author={newPost.author} body={newPost.body} />
          }
          {
            [...authors].reverse().map(
              (itm,itr)=><Post key={'author_' + itm.author + "_" + itr} author={itm.author} body={itm.body}/>
            )
          }
        </ul>
    }
    {
      authors.length === 0 && 
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