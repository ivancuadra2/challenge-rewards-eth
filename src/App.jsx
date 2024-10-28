
// import { TextField } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import PropTypes from 'prop-types'
import IndexPage from './pages/index.jsx'
import './App.css'
import { EthereumProvider } from './context/EthereumRewardsContext.jsx';


function App(/*{  children}*/) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <EthereumProvider >
        <IndexPage />
      </EthereumProvider>
    </LocalizationProvider>
  )
}




export default App