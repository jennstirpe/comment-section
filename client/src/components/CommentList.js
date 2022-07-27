
import { StyledCommentList } from './styled/CommentList.styled';
import { StyledNewUserForm } from './styled/NewUserForm.styled';
import Comment from './Comment';

import { useState, useEffect, useRef } from 'react';
//Queries
import { useQuery } from '@apollo/client';
import { LOAD_COMMENTS } from '../GraphQL/Queries';
// Mutations
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../GraphQL/Mutations';


const LOCAL_STORAGE_KEY = "commentAs";



function CommentList() {

  const { data, loading } = useQuery(LOAD_COMMENTS);
  const [mainComments, setMainComments] = useState([]);
  const [replyComments, setReplyComments] =  useState([]);

  const [user, setUser] = useState("");
  const usernameInput = useRef();
  const [ addUser ] = useMutation(ADD_USER);

  // Set state for comments and replies
  useEffect(() => {
      if(data) {
        setMainComments(data.comments.filter(comment => comment.replyingTo === null));
        setReplyComments(data.comments.filter(comment => comment.replyingTo !== null));
      }
  }, [data]);

  // Set state for username
  useEffect(() => {
    const storedUserName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedUserName) {
      setUser(storedUserName)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    // Add new username to DB
    if(usernameInput.current.value !== "") {
      addUser({
        variables: {
          name: user,
        }
      })
    }
  }, [user]);


  function handleAddUser(e) {
    e.preventDefault()
    if(usernameInput.current.value == "" || usernameInput.current.value == null ) {
      return
    } else {
      const newUserName = usernameInput.current.value;
      setUser(newUserName);
    }

    usernameInput.current.value = null;
  }


  return (

    <>
  
      <StyledNewUserForm>
        <form className="newUserForm">
            <input ref={usernameInput} type="text" placeholder="Comment as..." maxLength="25" />
            <button onClick={handleAddUser}>+</button>
        </form>
        { user && <p className="currentUser">Now commenting as: <span className="username">{user}</span></p>}
      </StyledNewUserForm>

      <StyledCommentList>
        {mainComments.map(comment => {
          return <Comment key={comment.id} comment={comment} replies={replyComments} />
        })}
      </StyledCommentList> 

    </>
    
  )
}

export default CommentList;
