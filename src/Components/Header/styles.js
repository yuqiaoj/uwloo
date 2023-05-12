import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "80px",
    maxHeight: "80px",
  },
  icon: {
    color: theme.palette.warning.main,
  },
}));
