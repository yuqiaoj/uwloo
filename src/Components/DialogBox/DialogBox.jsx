import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Link } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const DialogBox = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" disableTypography className={classes.title} >
                    <Typography variant="h6">Warning: Under Construction!</Typography>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers className={classes.content}>
                    <Typography gutterBottom>
                        This release of UWLoo is for development and demonstration purposes only.
                    </Typography>
                    <Typography gutterBottom>
                        Feel free to experiment with the application and view the sample reviews.
                    </Typography>
                    <Typography gutterBottom>
                        If you want to visit the website once it is finished, keep an eye out for
                        the final relsase on&nbsp;
                        <Link underline="always" href="https://github.com/yuqiaoj" target="_blank">https://github.com/yuqiaoj</Link>.
                    </Typography>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogBox;