import React ,{ useState } from 'react'

import { Typography,Button,Container, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { TextField } from '@material-ui/core';
import {useHistory } from 'react-router-dom'
import DataTable from '../components/DataTable';

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


export default function LocationReport(props) {

const history  = useHistory() 
const classes = useStyles()

  return (
    
    <Container>
      <h1> Helllo Location Reports </h1>
      <DataTable/>
    </Container>
    
  )
}
