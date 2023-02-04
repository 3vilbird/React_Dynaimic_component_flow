import React from 'react';
import Button from '@mui/material/Button';

function ThirdPage(props) {
    return (
        <div>
            <h2>hello from third page</h2>
            <Button variant="contained" onClick={props.onNext}>Next</Button>
        </div>
    );
}

export default ThirdPage;