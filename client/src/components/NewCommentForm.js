
import { StyledNewCommentForm } from './styled/NewCommentForm.styled';


import julius from '../images/avatars/image-juliusomo.png';

export default function NewCommentForm() {
  return (
    <StyledNewCommentForm>
        <form className="new-comment-form">
            <textarea className="new-comment-text" placeholder="Add a comment..." />
            <img className="user-img" src={julius} alt="Julius Omo" />
            <button className="new-comment-submit" type="submit">send</button>
        </form>
    </StyledNewCommentForm>
  )
}
