function EthereumRewards() {
    const { loading, error, data } = useQuery(GET_ETH_REWARDS);
  
    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4 text-red-500">Error: {error.message}</div>;
  
    const formattedData = data.ethereum.blocks.map(block => ({
      date: block.date.date,
      reward: Number(block.reward)
    }));
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Ethereum Block Rewards</h2>
        <div className="w-full h-[400px]">
            {formattedData}
        </div>
      </div>
    );
  }