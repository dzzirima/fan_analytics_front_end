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

  useEffect(() => {
    async function fetchData(){
      let hash = await  api.getGlobalHashFromLocalStorage()
      const result = await axios.get(`location?globalHash=${hash}`)
      console.log(result)
      setTrackers(result.data);
      return result
    }
    fetchData()
  }, [])
  

  return (
    <Container>

      <div>
        {
          trackers.map((item) =>(
            <h1> {item.name} </h1>
          ))
        }

      </div>
     
      <h1> Helllo Location Reports </h1>
      {/* <DataTable/> */}
    </Container>
    
  )
}
