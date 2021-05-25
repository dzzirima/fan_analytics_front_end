import React ,{ useEffect, useState } from 'react'

import { Typography,Button,Container, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { TextField } from '@material-ui/core';
import {useHistory } from 'react-router-dom'
import DataTable from '../components/DataTable';
import api from '../api/api'
import axios from '../api/Axios'
import Loader from '../components/Loader'


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
  const [trackers, setTrackers] = useState([])
  const [dataState, setDataState] = useState(false)

  useEffect(() => {
    async function fetchData(){
      let hash = await  api.getGlobalHashFromLocalStorage()
      const result = await axios.get(`location?globalHash=${hash}`)
      setTrackers(result.data);
      setDataState(true)
      console.log(result)
      return result
    }
    fetchData()
  }, [])
  
  return (
    <Container>
      {
        dataState ? (
          <DataTable data = {trackers}/>
       
        ):(
          <Loader/>
        )
      }
  
    </Container>
    
  )
}
