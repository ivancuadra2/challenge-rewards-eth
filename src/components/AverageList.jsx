import {
    List,
    ListItem,
    Divider,
    Typography,
    Stack,
    Card
} from '@mui/material';

import { useEthereum } from '../context/EthereumRewardsContext';

{/* Reemplaza tu código actual con esto */ }

const AverageList = () => {

    const {
        historicalAverage
    } = useEthereum();


    return (
        <Card>
            <Typography variant="h6" sx={{ p: 2 }}>
                Historical Query Average
            </Typography>
            <Divider />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {historicalAverage.map((average, i) => (
                    <div key={i}>
                        <ListItem>
                            <Stack direction="row" spacing={2} width="100%" alignItems="center">
                                <Stack direction="column" flex={1}>
                                    <Typography variant="caption" color="text.secondary">
                                        Date Start
                                    </Typography>
                                    <Typography variant="body2">
                                        {average.dateStart}
                                    </Typography>
                                </Stack>

                                <Divider orientation="vertical" flexItem />

                                <Stack direction="column" flex={1}>
                                    <Typography variant="caption" color="text.secondary">
                                        Date End
                                    </Typography>
                                    <Typography variant="body2">
                                        {average.dateEnd}
                                    </Typography>
                                </Stack>

                                <Divider orientation="vertical" flexItem />

                                <Stack direction="column" flex={1}>
                                    <Typography variant="caption" color="text.secondary">
                                        Average
                                    </Typography>
                                    <Typography variant="body2" fontWeight="bold">
                                        {average.average.toFixed(2)} ETH
                                    </Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        {i < historicalAverage.length - 1 && (
                            <Divider component="li" />
                        )}
                    </div>
                ))}
            </List>
        </Card>
    );


}

export default AverageList;