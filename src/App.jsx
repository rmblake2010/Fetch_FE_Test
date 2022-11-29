import { useState, useEffect } from 'react'
import { Button, Paper, TextField, Typography, Select, InputLabel, MenuItem, Menu, FormControl } from '@mui/material'
import Form from './components/Form/Form'
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
    setData(resData)
  }
  fetchData()
}
, [])



//Rendering after API call
const renderForm = () => {
  if(data){
    console.log(data.occupations)
    return(
      <Form data={data}></Form>
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
