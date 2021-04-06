import React ,{ useState } from 'react'

import { Typography,Button,Container, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { TextField } from '@material-ui/core';
import {useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  btn:{
    backgroundColor:"blue",
    fontSize:60,
    '&:hover':{
      backgroundColor:'green'
    }

  },
  myTextField:{
    paddingBottom:16,
    display:"block"
    
    
  }

})

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#fefefe'
    }
  }

})


export default function Create() {
const history  = useHistory() 

  const [title, setTitleState] = useState(null)
  const [details, setDetailState] = useState(null)
  const [titleError, setTitleErrorState] = useState(false)
  const [detailsError, setDetailErrorState] = useState(false)
  const [category, setCategoryState] =  useState('todos')

  const classes = useStyles()

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTitleErrorState(false)
    setDetailErrorState(false)

    if(!title){
      setTitleErrorState(true)
    }
    if(!details){
      setDetailErrorState(true)
    }

    if(title && details){
      console.log(title,details,category)
      fetch(' http://localhost:8000/notes',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,details,category})
      }).then(() =>history.push('/'))
    
    }
    
  }
  

  return (
    
    <Container>
      <Typography
        variant="h6"
        component = "h2"
        gutterBottom
        align ="center"
        color ="initial"
       
      > 
      Create a new Note
      </Typography>

      <form>
        <TextField
        className = {classes.myTextField}
         label ="Notes Title"
         variant= "outlined"
         color = "secondary"
         required
         fullWidth ={true}
         error= {titleError}
         
         onChange = {(e) => {setTitleState(e.target.value)}}
        
        />
        <TextField
        className = {classes.myTextField}
         label ="Notes Details"
         variant= "outlined"
         color = "secondary"
         multiline
         rows ={4}
         fullWidth ={true}
         error = {detailsError}


         onChange = {(e) =>{setDetailState(e.target.value)}}
        
        />
      <FormControl className = {classes.myTextField}>
        <FormLabel>Note Catergory</FormLabel>
        <RadioGroup value = {category} onChange = {(e) =>{setCategoryState(e.target.value)}}>
          <FormControlLabel control = {<Radio/>} label = "Money" value ="money"></FormControlLabel>
          <FormControlLabel control = {<Radio/>} label = "Todos" value = "todos"></FormControlLabel>
          <FormControlLabel control = {<Radio/>} label = "Reminders"  value ="reminders" ></FormControlLabel>
          <FormControlLabel control = {<Radio/>} label = "Work" value = "work"></FormControlLabel>
        </RadioGroup>
      </FormControl>
      
      
      <Button
       
        variant="contained"
        size="large"
        color="primary"
        type = "submit"
        endIcon = {<ArrowForwardIosIcon/>}

        onClick = {(e) => {handleSubmit(e)}}
      >
        SUBMIT
      </Button>
      <br/>

      </form>
    
    </Container>
    
  )
}
