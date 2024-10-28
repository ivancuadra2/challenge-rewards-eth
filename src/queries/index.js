import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql.bitquery.io',
    cache: new InMemoryCache(),
    headers: {
      'X-API-KEY': 'BQY7FhzuJTR0jFiNW7CZmVEeDUZT8raU'
    }
  });
  import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const GET_ETH_REWARDS = gql`
  query GetEthRewards($since: String!, $till: String!) {
    ethereum {
      blocks {
        date {
          date
        }
        reward
      }
    }
  }
`;

  export {client, GET_ETH_REWARDS}