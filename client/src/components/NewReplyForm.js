
import { StyledNewReplyForm } from './styled/NewReplyForm.styled';


import julius from '../images/avatars/image-juliusomo.png';

export default function NewReplyForm({ replyingTo }) {

  const replyToPlaceholder = "Reply to " + replyingTo + "...";

  return (
    <StyledNewReplyForm>
        <form className="new-reply-form">
            <textarea className="new-reply-text" placeholder={replyToPlaceholder} />
            <img className="user-img" src={julius} alt="Julius Omo" />
            <button className="new-reply-submit" type="submit">Reply</button>
        </form>
    </StyledNewReplyForm>
  )
}