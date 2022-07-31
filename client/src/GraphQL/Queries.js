import { gql } from '@apollo/client';

export const LOAD_COMMENTS_AND_USERS = gql`
    query {
        comments {
            id
            content
            createdAt
            score
            user {
              id
              name
            }
            replyingTo {
              id
            }
          }
          users {
            id
            name
        }
    }
`;


export const LOAD_USERS = gql`
    query {
      users {
          id
          name
      }
    }
`;
