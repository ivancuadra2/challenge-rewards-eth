import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonTest from './components/Button';
// import Button from '@mui/material/Button';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

import './App.css'


const client = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  cache: new InMemoryCache(),
  headers: {
    'X-API-KEY': 'BQY7FhzuJTR0jFiNW7CZmVEeDUZT8raU'
  }
});

const GET_ETH_REWARDS = gql`
  query {
    ethereum {
      blocks(
        date: {since: "2024-01-01", till: "2024-02-01"}
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


function App() {
  const [count, setCount] = useState(0)
  // const { loading, error, data } = useQuery(GET_ETH_REWARDS)
  
  useEffect(() => {
    client
    .query({
      query: GET_ETH_REWARDS,
    })
    .then((result) => console.log(result));
  })

  // if (loading) return <div className="text-center p-4">Loading...</div>;
  // if (error) return <div className="text-center p-4 text-red-500">Error: {error.message}</div>;

  return (
    <>

      <ButtonTest onClick={() => setCount((count) => count + 1)} label='Test' /> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p onClick={() => setCount((count) => count + 1)} className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
