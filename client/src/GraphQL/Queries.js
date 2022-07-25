import { gql } from '@apollo/client';

export const LOAD_COMMENTS = gql`
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
    }
`;


// export const LOAD_USERS = gql`
//     query {
//         users {
//             id
//             name
//             comments
//         }
//     }
// `;