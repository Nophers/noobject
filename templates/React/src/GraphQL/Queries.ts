import { gql } from '@apollo/client';

export const FETCH_USER = gql`
    query {
        getAllUsers {
            id
            name
            email
            password
    }
}
`;