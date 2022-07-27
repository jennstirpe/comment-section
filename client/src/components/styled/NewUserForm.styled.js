import styled from "styled-components";

export const StyledNewUserForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 3.5rem;
    margin-bottom: 3rem;

    .newUserForm {
        width: 20rem;
        margin-bottom: .75rem;
        border-radius: .5rem;
        box-shadow: 0rem .5rem 1rem #ccc;

        input {
            width: 16.75rem;
            height: 1.75rem;
            border: none;
            font-size: 1rem;
            padding: 0.25rem .5rem;
            border-top-left-radius: .5rem;
            border-bottom-left-radius: .5rem;
            color: ${({theme}) => theme.accent};
            background: rgb(250, 250, 250);
            transition: background 250ms linear;

            &:hover {
                cursor: pointer;
                background: #fff;
            }

            &:focus {
                outline: none;
                background: #fff;
            }
        }

        button {
            height: 2.25rem;
            width: 2.25rem;
            font-size: 1rem;
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;
            border: none;
            color: ${({theme}) => theme.accent};
            transition: all 250ms linear;

            &:hover {
                cursor: pointer;
                font-weight: bold;
                color: ${({theme}) => theme.accentHover};
            }
        }
    }


    .currentUser {
        color: ${({theme}) => theme.commentText};
        font-size: .75rem;
        width: 20rem;

        .username {
            color: ${({theme}) => theme.accent};
            font-weight: 700;
            font-size: 1rem;
            margin-left: .5rem;
        }
    }





    @media (min-width: 769px) {
        align-items: flex-end;
        margin-right: 1rem;
    }
`;
