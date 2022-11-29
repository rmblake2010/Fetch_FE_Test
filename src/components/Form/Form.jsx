import { useState } from 'react'
import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem, Menu, FormControl } from '@mui/material'


const Form = ({data}) => {

let [postData, setPostData] = useState({ name: '', email: '', password: '', occupation: '', state: ''}) 


const handleSubmit = async (e, submitData) => {
  e.preventDefault()
  console.log(submitData)
}


return(
    <Paper>
    <FormControl autoComplete='off' >
    <form  onSubmit={(e) => handleSubmit(e, postData)} action='/' method='POST'>
      <Typography variant='h6'>Sign up</Typography>
      <Typography variant='h7'>Please fill out all boxes</Typography>
      <TextField required name='name' variant='outlined' label='Full Name' onChange={(e) => setPostData({...postData, name: e.target.value})}  fullWidth/>
      <TextField required name='email' variant='outlined' label='Email' onChange={(e) => setPostData({...postData, email: e.target.value})} fullWidth/>
      <TextField required name='password' variant='outlined' label='Password' onChange={(e) => setPostData({...postData, password: e.target.value})} fullWidth/>     
      <Select
          required
          defaultValue={""}   
          label="Occupation"
          onChange={(e) => setPostData({...postData, occupation: e.target.value})}
        >
          {data.occupations.map((occupation, i) => {
            return(
            <MenuItem key={i} value={occupation}>{occupation}</MenuItem>
            )
          })}
        </Select>

      <Select
        required
        defaultValue={""}
        label="State"
        onChange={(e) => setPostData({...postData, state: e.target.value})}
      >
          {data.states.map((state, i ) => {
            return(
              <MenuItem key={i} value={`${state.name},${state.abbreviation}`}>{`${state.name}, ${state.abbreviation}`}</MenuItem>
            )
          })}
      </Select>
        <Button type="submit" color="primary" variant='contained'>Submit</Button>
    </form>
    </FormControl>
  </Paper>
)

}

export default Form