
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid2';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import EthereumChart from '../components/EthereumRewards';
import Button from '../components/Button';

import { client, GET_ETH_REWARDS } from '../queries/index.js'





function IndexPage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [dateStart, setDateStart] = useState(dayjs(new Date()).subtract(1, 'month'))
    const [dateEnd, setDateEnd] = useState(dayjs(new Date()))
    const getRewards = (dateStart, dateEnd) => {
        setLoading(true)
        client
            .query({
                query: GET_ETH_REWARDS,
                variables: {
                    since: dateStart,
                    till: dateEnd
                },
            })
            .then((result) => {
                let blocks = result.data.ethereum.blocks
                setData(blocks.map(block => ({
                    date: block.date.date,
                    reward: block.reward,
                })))
                setLoading(false)
                console.log(result.data.ethereum.blocks)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <h1>Challenge Rewards Ethereum</h1>
            </Grid>
            <Grid container spacing={2} xs={12}>

                <DatePicker
                    label="Start Date"
                    value={dateStart}
                    onChange={(newValue) => setDateStart(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    label="End Date"
                    value={dateEnd}
                    onChange={(newValue) => setDateEnd(newValue)}
                    renderInput={(params) => <TextField {...params}
                    />}
                />
                <Button onClick={() => getRewards(dateStart, dateEnd)} label='Buscar rewards' />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                { <EthereumChart data={data} loading={loading} />}
            </Grid>

        </Grid>
    )
}

export default IndexPage


