import React from 'react';
import { StyledCommentList } from './styled/CommentList.styled';
import Comment from './Comment';
import Reply from './Reply';

import NewReplyForm from './NewReplyForm';



export default function CommentList() {
  return (
    
    <StyledCommentList>
      <Comment />
      <Reply />
      <Reply />
      <NewReplyForm />
      <Comment />
    </StyledCommentList> 
    
  )
}
