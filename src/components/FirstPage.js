import React from 'react';
import Button from '@mui/material/Button';

function FirstPage(props) {
    return (
        <div>
            <h1>Hello from first page</h1>
            <Button variant="contained" onClick={props.onNext}>Next</Button>
        </div>
    );
}

export default FirstPage;