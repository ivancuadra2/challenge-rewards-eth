import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { client, GET_ETH_REWARDS } from '../queries/index.js';

const EthereumContext = createContext();

export function EthereumProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateStart, setDateStart] = useState(dayjs(new Date()).subtract(1, 'month'));
  const [dateEnd, setDateEnd] = useState(dayjs(new Date()));
  const [historicalAverage, setHistoricalAverage] = useState([]);
  const [showButtonSearch, setShowButtonSearch] = useState(false);

  const getRewards = (dateStart, dateEnd) => {
    setLoading(true);
    client
      .query({
        query: GET_ETH_REWARDS,
        variables: {
          since: dateStart,
          till: dateEnd
        },
      })
      .then((result) => {
        let blocks = result.data.ethereum.blocks;
        setData(blocks.map(block => ({
          date: block.date.date,
          reward: block.reward,
        })));
        const average = blocks.reduce((acc, d) => acc + d.reward, 0) / blocks.length;
        const historicalItem = { average, dateStart: dateStart.format('YYYY-MM-DD'), dateEnd: dateEnd.format('YYYY-MM-DD') };
        const isDuplicate = historicalAverage.some(item => 
            item.dateStart === dateStart.format('YYYY-MM-DD') && item.dateEnd === dateEnd.format('YYYY-MM-DD')
        );
        if (!isDuplicate) {
            setHistoricalAverage([...historicalAverage, historicalItem]);
        }
        setShowButtonSearch(false);
        // setHistoricalAverage([...historicalAverage, historicalItem]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const value = {
    data,
    loading,
    dateStart,
    dateEnd,
    setDateStart,
    setDateEnd,
    getRewards,
    historicalAverage,
    showButtonSearch,
    setShowButtonSearch
  };
  EthereumProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <EthereumContext.Provider value={value}>
      {children}
    </EthereumContext.Provider>
  );
}



export function useEthereum() {
  const context = useContext(EthereumContext);
  if (context === undefined) {
    throw new Error('useEthereum must be used within a EthereumProvider');
  }
  return context;
}