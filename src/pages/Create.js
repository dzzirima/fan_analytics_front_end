import React from 'react'

import { Typography,Button,Container} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'

const useStyles = makeStyles({
  btn:{
    backgroundColor:"blue",
    fontSize:60,
    '&:hover':{
      backgroundColor:'green'
    }

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
  const classes = useStyles()

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
      <Button
       
        variant="contained"
        size="large"
        color="primary"
        type = "submit"
        endIcon = {<ArrowForwardIosIcon/>}
      >
        SUBMIT
      </Button>
      <br/>
    
    </Container>
    </ThemeProvider>
  )
}
