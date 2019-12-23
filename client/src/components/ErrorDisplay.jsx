import React from 'react'
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function ErrorDisplay({ close, message }) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={true}
            autoHideDuration={6000}
            onClose={close}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={message}
            action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={close}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />

    );
}


export default ErrorDisplay