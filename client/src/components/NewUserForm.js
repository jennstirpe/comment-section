
import { useRef } from 'react';
import { StyledNewUserForm } from './styled/NewUserForm.styled';


export default function NewUserForm({ addNewUser, activeUser }) {
    const usernameInput = useRef();

    function handleAddNewUser(e) {
        addNewUser(e, usernameInput)
    }

  return (
    <StyledNewUserForm>
        <form className="newUserForm">
              <input ref={usernameInput} type="text" placeholder="Comment as..." maxLength="25" />
              <button onClick={handleAddNewUser}>+</button>
        </form>
        { activeUser && <p className="currentUser">Now commenting as: <span className="username">{activeUser}</span></p>}
    </StyledNewUserForm>
  )
}
