// import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default function CustomButton({ label, onClick, disabled }) {
    return <Button variant="contained" onClick={onClick} disabled={disabled} >{label}</Button>;
}

