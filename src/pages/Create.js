import React ,{ useState } from 'react'

import { Typography,Button,Container} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { TextField } from '@material-ui/core';

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

  const [title, setTitleState] = useState(null)
  const [details, setDetailState] = useState(null)
  const [titleError, setTitleErrorState] = useState(false)
  const [detailsError, setDetailErrorState] = useState(false)

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
      console.log(title,details)
    }
    
  }
  

  return (
    <ThemeProvider theme = {theme}>
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
      </form>
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
    
    </Container>
    </ThemeProvider>
  )
}
