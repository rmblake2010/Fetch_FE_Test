import { useState, useEffect } from 'react'
import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem, Menu, FormControl } from '@mui/material'
import './App.css'

function App() {
//API Data
const [data, setData] = useState([])
//Form Data
let [postData, setPostData] = useState({ name: '', email: '', password: '', occupation: '', state: ''}) 



useEffect(() => {
  const fetchData = async () => {
    let response = await fetch('https://frontend-take-home.fetchrewards.com/form')
    let resData = await response.json()
    console.log(resData)
    setData(resData)
  }
  fetchData()
}, [])

const menuDropdown = (data) => {
  if(data){
    data.occupations.map((occupation, i) => {
      console.log(i)
      return(
        <MenuItem key={i}>{occupation}</MenuItem>
      )
    })
  }
}



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
          {menuDropdown(data)}
        </Select>

    </FormControl>
  </Paper>
)
}

export default App
