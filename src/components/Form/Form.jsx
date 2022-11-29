import { useState } from 'react'
import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem } from '@mui/material'
import axios from 'axios'
import useStyles from './styles'


const Form = ({data}) => {
const classes = useStyles()

let [postData, setPostData] = useState({ name: '', email: '', password: '', occupation: '', state: ''}) 


const handleSubmit = async (e, submitData) => {
  e.preventDefault()
  console.log(submitData)
  try {
    await axios({
      method:'post',
      url: "https://frontend-take-home.fetchrewards.com/form",
      data: submitData
    })
    .then((response) => {
      console.log(response.status)
    })
  }catch(err){
    console.log(err)
  }

}


return(
    <Paper className={` ${classes.paper}`}>
    <form  className={`${classes.root} ${classes.form}`}   onSubmit={(e) => handleSubmit(e, postData)} action='/' method='POST'>
      <Typography variant='h6'>Sign up</Typography>
      <Typography variant='h7'>Please fill out all boxes</Typography>
      <TextField  required name='name' variant='outlined' label='Full Name' onChange={(e) => setPostData({...postData, name: e.target.value})}  fullWidth/>
      <TextField className={`${classes.textField}`} required name='email' variant='outlined' label='Email' onChange={(e) => setPostData({...postData, email: e.target.value})} fullWidth/>
      <TextField className={`${classes.textField}`} required name='password' variant='outlined' label='Password' onChange={(e) => setPostData({...postData, password: e.target.value})} fullWidth/>     
      <InputLabel>Occupation</InputLabel>
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
      <InputLabel>State</InputLabel>
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
  </Paper>
)

}

export default Form