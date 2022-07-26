import styled from "styled-components";

export const StyledReplyList = styled.section`
    position: relative;
    margin: 1.25rem 0;

    &::before {
        content: "";
        height: 100%;
        width: 2px;
        background-color: ${({theme}) => theme.inactiveBorder};
        position: absolute;
        left: 1rem;
        top: 0;
    }


    @media (min-width: 769px) {
        &::before {
            left: 4rem;
            width: 3px;
        }
    } 

`