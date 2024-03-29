import styled from "styled-components";

export const StyledNewReplyForm = styled.section`
    background: ${({theme})  => theme.commentBg};
    width: 80%;
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem; 
    margin-left: auto;

    .new-reply-form {
        height: 9rem;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .new-reply-text {
        width: 85%;
        height: 3.5rem;
        border-radius: .5rem;
        border-color: ${({theme}) => theme.inactiveBorder};
        padding: .75rem;
        resize: none;
        transition: all 250ms linear;

        &::placeholder {
            font-family: 'Rubik', sans-serif;
        }

        &:hover {
            cursor: pointer;
            border: 2px solid ${({theme}) => theme.inactiveBorder};
        }
        &:focus {
            outline: 1px solid ${({theme}) => theme.accent};
        }
    }

    .user-img {
        height: 2.5rem;
        position: absolute;
        bottom: 0rem;
        left: 0rem;
    }

    .new-reply-submit {
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
        padding: .75rem 1.5rem;
        border: none;
        border-radius: .5rem;
        background: ${({theme}) => theme.accent};
        color: #fff;
        transition: all 250ms ease;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }



    @media (min-width: 769px) {
        padding: 1.7rem;
        width: 37.6rem;

        .new-reply-form {
            height: 6rem;
        }

        .new-reply-text {
            width: 24rem;
            height: 4.5rem;
            margin-right: 3.75rem;
        }

        .user-img {
            bottom: 3.5rem;
            left: .5rem;
        }

        .new-reply-submit {
            bottom: 2.75rem;
            right: 0rem;
            font-size: 1.1rem;
            font-weight: 400;
            padding: 1rem 1.75rem;
        }

    }




`