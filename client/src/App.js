
import { useState, useEffect } from 'react';

import { useLazyQuery, useMutation } from '@apollo/client';

// Styling
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';

// Components
import CommentList from "./components/CommentList";
import NewCommentForm from "./components/NewCommentForm";
import NewUserForm from './components/NewUserForm';


//QUERIES & MUTATIONS
import { LOAD_COMMENTS_AND_USERS } from './GraphQL/Queries';
import { ADD_USER } from './GraphQL/Mutations';

// Storage key for current username
const LOCAL_STORAGE_KEY = "commentAs";



function App() {

  const [ getData ] = useLazyQuery(LOAD_COMMENTS_AND_USERS);
  const [ addUser ] = useMutation(ADD_USER, {
    refetchQueries: () => [
      { query: LOAD_COMMENTS_AND_USERS }
    ]
  });


  const [ data, setData ] = useState();
  const [ mainComments, setMainComments ] = useState([]);
  const [ replyComments, setReplyComments ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ activeUser, setActiveUser ] = useState("");


  useEffect(() => {
    async function fetchData() {
      const res = await getData();
      setData(res.data);
      console.log(res.data)
    }
    fetchData();

    const storedUserName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedUserName) {
      setActiveUser(storedUserName)
    }
  }, [])


  useEffect(() => {

    if(data) {
      setMainComments(data.comments.filter(comment => comment.replyingTo === null));
      setReplyComments(data.comments.filter(comment => comment.replyingTo !== null));
      setAllUsers(data.users);
    }
  }, [data]);



  useEffect(() => {
    if(activeUser) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activeUser));
    }
  }, [activeUser]);



  async function addNewUser(e, usernameInput) {
    e.preventDefault();
    if(usernameInput.current.value === "" || usernameInput.current.value === null ) {
      return
    } else {
      const newUserName = usernameInput.current.value;
      setActiveUser(newUserName);
      
      
      if(usernameInput.current.value !== activeUser) {
        await addUser({
          variables: {
            name: newUserName,
          }, 
        })

        async function getUpdatedData() {
          const res = await getData();
          setData(res.data);
        }

        setTimeout(() => {
          getUpdatedData()
        }, 1500)

      };
    };
    usernameInput.current.value = null;
  }




  return (
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyles  />
            <h1>Comment Section</h1>

            <NewUserForm addNewUser={addNewUser} activeUser={activeUser} />

            <CommentList mainComments={mainComments} replyComments={replyComments} activeUser={activeUser} />

            <NewCommentForm />

        </>
      </ThemeProvider>
  );
}

export default App;
