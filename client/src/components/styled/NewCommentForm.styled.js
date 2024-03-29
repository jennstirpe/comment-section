import styled from "styled-components";

export const StyledNewCommentForm = styled.section`
    background: ${({theme})  => theme.commentBg};
    min-width: 20rem;
    margin: 1rem;
    margin-bottom: 5rem;
    padding: 1rem;
    border-radius: .5rem; 


    .new-comment-form {
        height: 9rem;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .new-comment-text {
        width: 80%;
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

    .new-comment-submit {
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
        width: 43.5rem;

        .new-comment-form {
            height: 6rem;
        }

        .new-comment-text {
            width: 28rem;
            height: 4.5rem;
            margin-right: 3rem;
        }


        .user-img {
            bottom: 3.5rem;
            left: .5rem;
        }

        .new-comment-submit {
            bottom: 2.75rem;
            right: 0rem;
            font-size: 1.1rem;
            font-weight: 400;
            padding: 1rem 2rem;
        }

    }




`