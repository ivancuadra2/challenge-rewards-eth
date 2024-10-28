import React from 'react';
import { render, act, renderHook } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { EthereumProvider, useEthereum } from './EthereumRewardsContext';
import { GET_ETH_REWARDS } from '../queries/index.js';
import dayjs from 'dayjs';

// Mock completo de las dependencias de Apollo
jest.mock('../queries/index.js', () => ({
  GET_ETH_REWARDS: jest.requireActual('@apollo/client').gql`
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
  `,
  client: {
    query: jest.fn()
  }
}));

const mockData = {
  data: {
    ethereum: {
      blocks: [
        {
          date: { date: '2024-01-01' },
          reward: 2.5
        },
        {
          date: { date: '2024-01-02' },
          reward: 3.0
        }
      ]
    }
  }
};

// Configuración de los mocks de Apollo
const mocks = [
  {
    request: {
      query: GET_ETH_REWARDS,
      variables: {
        since: expect.any(String),
        till: expect.any(String)
      }
    },
    result: mockData
  }
];

// Wrapper para los tests con MockedProvider
const Wrapper = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <EthereumProvider>
      {children}
    </EthereumProvider>
  </MockedProvider>
);

describe('EthereumProvider', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useEthereum(), { 
      wrapper: Wrapper 
    });

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});