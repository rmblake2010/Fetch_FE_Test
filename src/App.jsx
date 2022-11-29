import { useState, useEffect } from 'react'
import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem, Menu, FormControl } from '@mui/material'
import Form from './components/Form/Form'
import './App.css'

function App() {
//API Data
const [data, setData] = useState([])
const occupations = []
//Form Data


useEffect(() => {
  const fetchData = async () => {
    let response = await fetch('https://frontend-take-home.fetchrewards.com/form')
    let resData = await response.json()
    setData(resData)
  }
  fetchData()

}
, [])


//Rendering after API call
const renderForm = () => {
  if(data.occupations && data.states){
    console.log(data.occupations[0])
    return(
      <Form data={data}></Form>
    )
  }else{
    return(
      <h1>loading!</h1>
    )
  }
}

  return(
    <div>
      {renderForm()}
    </div>
  )

}

export default App
