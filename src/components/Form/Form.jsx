import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem, Menu, FormControl } from '@mui/material'


const Form = (props) => {

const occupations = []

const states = [props.data.states]



return(
    <Paper>
    <FormControl autoComplete='off'>
      <Typography variant='h6'>Sign up</Typography>
      <Typography variant='h7'>Please fill out all boxes</Typography>
      <TextField required name='name' variant='outlined' label='Full Name' fullWidth/>
      <TextField required name='email' variant='outlined' label='Email' fullWidth/>
      <TextField required name='password' variant='outlined' label='Password' fullWidth/>   
      <InputLabel>Occupation</InputLabel>   
      <Select
          defaultValue={""}   
          label="Occupation"
        >
            
        </Select>

    </FormControl>
  </Paper>
)

}

export default Form