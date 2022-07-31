
import { useState, useEffect } from 'react';
import Comment from './Comment';
import { StyledCommentList } from './styled/CommentList.styled';
import { LOAD_USERS } from '../GraphQL/Queries'
import { useLazyQuery } from '@apollo/client';



function CommentList({ mainComments, replyComments, activeUser }) {


  const [ getUsers ] = useLazyQuery(LOAD_USERS);
  const [ user, setUser ] = useState();

  useEffect(() => {
    let allUsers;

    async function fetchUsers() {
      const res = await getUsers();
      if(res.data) {
        allUsers = res.data.users;
        console.log(allUsers)
        setUser(allUsers.find(user => user.name === activeUser))
      }
    }
    fetchUsers();
    
  }, [activeUser])

  
  console.log(activeUser)

    return (

      <StyledCommentList>
          {mainComments.map(comment => {
            return <Comment key={comment.id} user={user} comment={comment} replies={replyComments} />
          })}
      </StyledCommentList> 
    )
  }


export default CommentList;
