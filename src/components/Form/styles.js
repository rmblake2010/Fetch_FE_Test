import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({

  paper: {
    display: 'flex',
    justifyContent: 'center',
    
  } , 
  form: {
    backgroundColor: '#C5B498',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    margin: '4rem',
  },
  textField: {
    marginBottom: '2%'

  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));