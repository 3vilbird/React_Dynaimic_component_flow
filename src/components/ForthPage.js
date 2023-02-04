import React from 'react';
import Button from '@mui/material/Button';

function ForthPage(props) {
    return (
        <div>
            <h1>Hello from Fourth page</h1>
            <Button variant="contained" onClick={props.onNext}>Next</Button>

        </div>
    );
}

export default ForthPage;