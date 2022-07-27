
import { useState } from 'react';
import { StyledNewCommentForm } from './styled/NewCommentForm.styled';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../GraphQL/Mutations';

import julius from '../images/avatars/image-juliusomo.png';




export default function NewCommentForm() {

  const [ newCommentText, setNewCommentText ] =  useState();
  

  const [ addComment, { error } ] = useMutation(ADD_COMMENT);


  function commentText(e)  {
    setNewCommentText(e.target.value);
  }

  function handleSubmitNewComment(e) {
    e.preventDefault();
    addComment({
      variables: {
        content: newCommentText,
        createdAt: "7-26-2022",
        score: 0,
        userId: "testid",
        commentId: null
      }
    })

    if(error) {
      console.log(error)
    }
  }

  return (
    <StyledNewCommentForm>
        <form className="new-comment-form">
            <textarea onChange={commentText} className="new-comment-text" placeholder="Add a comment..." maxLength="200"/>
            <img className="user-img" src={julius} alt="Julius Omo" />
            <button className="new-comment-submit" type="submit" onClick={handleSubmitNewComment}>send</button>
        </form>
    </StyledNewCommentForm>
  )
}
