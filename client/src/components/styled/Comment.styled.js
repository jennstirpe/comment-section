import styled from "styled-components";

export const StyledComment = styled.section`
    background: ${({theme})  => theme.commentBg};
    min-width: 20rem;
    max-width: 45rem;
    max-height: 14rem;
    margin: 1.5rem 1rem;
    padding: 1rem;
    border-radius: .5rem;
    position: relative;

    .comment-content {
        margin-bottom: 4rem;
    }

    .comment-details {
        display: flex;
        height: 2.5rem;
        align-items: center;

        .user-img {
            height: 2.5rem;
            margin-right: 1rem;
        }

        .username {
            font-weight: 500;
            color: ${({theme})  => theme.headers};
            font-size: 1.1rem;
        }

        .user-flag {
            background: ${({theme})  => theme.accent};
            color: #fff;
            margin-left: .5rem;
            border-radius: .15rem;
            font-size: .85rem;
            font-weight: 500;
            padding: .2rem .4rem;
        }

        .date-posted {
            margin-left: 1rem;
        }

    }

    .comment-text {
        margin: 1rem 0;
        line-height: 1.4rem;
    }

    .comment-votes-counter {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        background: ${({theme})  => theme.bodyBg};
        width: 7rem;
        height: 2.7rem;
        border-radius: .75rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;


        .vote {
            color: ${({theme})  => theme.accent};
            font-weight: 500;
            font-size: 1.15rem;
        }

        .voteBtn {
            height: 100%;
            width: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background: none;
            

            &:hover {
                cursor: pointer;
            }

            svg path {
                transition: all 250ms ease-in;
            }

            &:hover svg path {
                fill: ${({theme})  => theme.accent};
            }
        }
    }


    /* Reply / Delete / Edit -- button styles */

    .replyBtn {
        position: absolute;
        right: .5rem;
        bottom: 1rem;
        font-size: 1.1rem;
        padding: .5rem;
        color: ${({theme})  => theme.accent};
        font-weight: 500;
        border: none;
        background: none;
        transition: all 250ms linear;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }

        svg {
            margin-right: .2rem;
        }
    }

    .delete, .edit {
        position: absolute;
        bottom: 1rem;
        font-size: 1.1rem;
        padding: .5rem;
        font-weight: 500;
        border: none;
        background: none;
        transition: all 250ms linear;
    }

    .delete {
        color: ${({theme})  => theme.warning};
        right: 4.75rem;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }

    .edit {
        color: ${({theme})  => theme.accent};
        right: .5rem;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }







    @media (min-width: 769px) {
        width: 45rem;
        height: 10rem; 

        .comment-content {
            margin-left: 5rem;
            margin-top: .5rem;
        }

        .comment-votes-counter {
            left: 1.5rem;
            top: 1.5rem;
            width: 3rem;
            height: 7rem;
            flex-direction: column;
        }

        .replyBtn, .delete, .edit {
            bottom: 8rem;
        }

        .replyBtn, .edit {
            right: 1.5rem;
        }

        .delete {
           right: 6rem;
        }

`