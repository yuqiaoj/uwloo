import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), 
    minWidth: 120, 
    marginBottom: '20px',
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '20px 0px 0px 20px',
    height: 'calc(100vh - 220px)',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '100%', overflow: 'auto',
  },
  search: {
    position: 'relative',
    width: '100%',
    justifyContent: 'start', 
    alignItems: 'center', 
  },
}));