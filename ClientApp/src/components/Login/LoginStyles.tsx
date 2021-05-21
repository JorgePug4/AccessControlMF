import { makeStyles } from '@material-ui/core/styles';

export const LoginStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  rootCont:{
    padding:"50px 0"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#2F4657'
  },
  pos: {
    marginBottom: 12,
  },
  logo: {
    width: '100%',
  },
  inputs: {
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #6c757d',
    height: '2em'
  }
});