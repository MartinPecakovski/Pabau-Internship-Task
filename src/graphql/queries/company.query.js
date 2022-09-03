import { gql } from '@apollo/client';

export const GET_COMPANY_INFO = gql`
  query {
    company {
      name
      summary
    }
  }
`;
