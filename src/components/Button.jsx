// import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default function CustomButton({ label, onClick }) {
    return <Button variant="contained" onClick={onClick}>{label}</Button>;
}

