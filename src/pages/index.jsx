
import { useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers'
import Grid from '@mui/material/Grid2';
// import TextField from '@mui/material/TextField';

import EthereumChart from '../components/EthereumRewardsChart';
import AverageList from '../components/AverageList';
import Button from '../components/Button';


import { useEthereum } from '../context/EthereumRewardsContext';





function IndexPage() {
    const {
        data,
        loading,
        dateStart,
        dateEnd,
        setDateStart,
        setDateEnd,
        getRewards,
        setShowButtonSearch,
        showButtonSearch
    } = useEthereum();


    useEffect(() => {
        if (data.length === 0) getRewards(dateStart, dateEnd);
    });

    const handleSetDateStart = (newValue) => {
        setDateStart(newValue);
        setShowButtonSearch(true);
    }

    const handleSetDateEnd = (newValue) => {
        setDateEnd(newValue);
        setShowButtonSearch(true);
    }

    return (
        <Grid container spacing={2}>
            <Grid container size={12}>
                <h2>Challenge Rewards Ethereum</h2>
            </Grid>
            <Grid container size={{ xs: 12, lg: 6 }}>
                <DatePicker
                    label="Start Date"
                    value={dateStart}
                    onChange={(newValue) => handleSetDateStart(newValue)}
                />
                <DatePicker
                    label="End Date"
                    value={dateEnd}
                    onChange={(newValue) => handleSetDateEnd(newValue)}
                />
            </Grid>
            <Grid container size={12}>
                <Button onClick={() => getRewards(dateStart, dateEnd)} label='Buscar rewards' disabled={!showButtonSearch} />
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
                { <EthereumChart data={data} loading={loading} />}
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
                    <AverageList />
            </Grid>

        </Grid>
    )
}

export default IndexPage


