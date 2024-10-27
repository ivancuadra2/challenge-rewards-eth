import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql.bitquery.io',
    cache: new InMemoryCache(),
    headers: {
      'X-API-KEY': 'BQY7FhzuJTR0jFiNW7CZmVEeDUZT8raU'
    }
  });
  
  // Modifica la consulta para aceptar variables
  const GET_ETH_REWARDS = gql`
    query GetEthRewards($since: ISO8601DateTime!, $till: ISO8601DateTime!) {
      ethereum {
        blocks(
          date: {since: $since, till: $till}
          options: {limit: 30}
        ) {
          date {
            date
          }
          reward
        }
      }
    }
  `;

  export {client, GET_ETH_REWARDS}