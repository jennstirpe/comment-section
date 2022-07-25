
import { StyledCommentList } from './styled/CommentList.styled';
import Comment from './Comment';
import Reply from './Reply';


// import NewReplyForm from './NewReplyForm';

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COMMENTS } from '../GraphQL/Queries';



function CommentList() {

  const { data } = useQuery(LOAD_COMMENTS);
  const [allComments, setAllComments] = useState([]);
  const [mainComments, setMainComments] = useState([]);
  const [replyComments, setReplyComments] =  useState([]);

  useEffect(() => {
      if(data) {
        setAllComments(data.comments);
        setMainComments(data.comments.filter(comment => comment.replyingTo === null));
        setReplyComments(data.comments.filter(comment => comment.replyingTo !== null));

      } else {
        console.log('no data returned')
      }
  }, [data]);


  return (
    
    <StyledCommentList>

      {mainComments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
      })}

      {/* <Comment />
      <Reply />
      <Reply />
      <NewReplyForm />
      <Comment /> */}


    </StyledCommentList> 
    
  )
}

export default CommentList;

// graphql(getCommentsQuery)