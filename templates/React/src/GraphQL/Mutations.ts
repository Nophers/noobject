import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $id:   Int!
        $name: String!
        $email: String!
        $password: String!
        ) {
        createUser(
            id: $id
            name: $name
            email: $email
            password: $password
        ) {
            id
        }     
    }
`;