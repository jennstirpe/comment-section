import { gql } from '@apollo/client';


export const ADD_COMMENT = gql`
    mutation addComment(
        $content: String! 
        $createdAt: String
        $score: Number
        $userId: String!
        $commentId: String
        ) {
        addComment(
            content: $content 
            createdAt: $createdAt
            score:$score 
            userId: $userId
            commentId: $commentId
            ) {
                id
                content
                createdAt
                score
                userId
                commentId
            }
    }
`;

export const ADD_USER = gql`
    mutation addUser($name: String!) {
        addUser(name: $name) {
            id
            name
        }
    }
`;