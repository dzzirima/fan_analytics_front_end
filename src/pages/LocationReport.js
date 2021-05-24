import React ,{ useEffect, useState } from 'react'

import { Typography,Button,Container, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { TextField } from '@material-ui/core';
import {useHistory } from 'react-router-dom'
import DataTable from '../components/DataTable';
import api from '../api/api'

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

async function  getTrackers(){
  let trackers = await  api.getTrackers(JSON.parse(api.getGlobalHashFromLocalStorage()).hash)
  return trackers
}

const history  = useHistory() 
const classes = useStyles()
const [trackers, setTrackers] = useState([])

useEffect(async() => {
  let trackersList = await  api.getTrackers(JSON.parse(api.getGlobalHashFromLocalStorage()).hash)
  setTrackers(trackersList)
  console.log(trackers)

}, [])

  return (
    
    <Container>
      <h1> Helllo Location Reports </h1>
      <DataTable/>
    </Container>
    
  )
}
