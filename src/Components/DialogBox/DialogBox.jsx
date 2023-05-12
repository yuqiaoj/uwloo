import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Link } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

const DialogBox = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" disableTypography className={classes.title}>
          <Typography variant="h6">Error</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <Typography gutterBottom>
            Unfortunately, this website no longer works due to the discontinuation of the Heroku free tier.
          </Typography>
          <Typography gutterBottom>
            <Link underline="always" href="https://github.com/yuqiaoj" target="_blank">
              My GitHub
            </Link>
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
};

export default DialogBox;
