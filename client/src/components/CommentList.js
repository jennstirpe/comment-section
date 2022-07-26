
import { StyledCommentList } from './styled/CommentList.styled';
import Comment from './Comment';

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COMMENTS } from '../GraphQL/Queries';



function CommentList() {

  const { data } = useQuery(LOAD_COMMENTS);
  const [mainComments, setMainComments] = useState([]);
  const [replyComments, setReplyComments] =  useState([]);

  useEffect(() => {
      if(data) {
        setMainComments(data.comments.filter(comment => comment.replyingTo === null));
        setReplyComments(data.comments.filter(comment => comment.replyingTo !== null));

      } else {
        console.log('no data returned')
      }
  }, [data]);


  return (
    
    <StyledCommentList>
      {mainComments.map(comment => {
        return <Comment key={comment.id} comment={comment} replies={replyComments} />
      })}
    </StyledCommentList> 
    
  )
}

export default CommentList;
