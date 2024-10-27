
// import { TextField } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import PropTypes from 'prop-types'
import IndexPage from './pages/index.jsx'
import './App.css'



function App(/*{  children}*/) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <IndexPage />
    </LocalizationProvider>
  )
}

// App.propTypes = {
//   children: PropTypes.node.isRequired
// }


export default App