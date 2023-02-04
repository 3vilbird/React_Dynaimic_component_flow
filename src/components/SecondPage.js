import React from 'react';
import Button from '@mui/material/Button';

function SecondPage(props) {
    return (
        <div>
            <h1>Hello from Second page</h1>
            <Button variant="contained" onClick={props.onNext}>Next</Button>

        </div>
    );
}
export default SecondPage;