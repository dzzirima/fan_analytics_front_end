import React ,{ useEffect, useState } from 'react'
import './Css/Parked.css'

import { Typography,Button,Container, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import {useHistory } from 'react-router-dom'
import {ParkedPageTable} from '../components/DataTable';
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
      main:'#fafafa'
    }
  }

})

export default function ParkedReport(props) {

  var globalTrackers = []
  const [trackers, setTrackers] = useState([]) // it should start with []
  const [fTracker,setFTrackers] = useState([])

  const [dataState, setDataState] = useState(false) // set state to false at first
  
  const filterByHours = (event) =>{
    let searchKey = event.target.value
    // console.log(typeof(searchKey))
    let filteredTrackers = fTracker.filter(function(tracker){
      return tracker.group === searchKey
    })

    // setTrackers(filteredTrackers)
    if(searchKey === "24" ||searchKey === "36" || searchKey === "72"|| searchKey === "others"){
      setFTrackers(filteredTrackers)
      console.log(trackers)

    }else if(searchKey === ""){
      setFTrackers(trackers)

    }
    
    
  }

  useEffect(() => {
    async function fetchData(){
      let hash = await  api.getGlobalHashFromLocalStorage()
      const result = await axios.get(`parked?globalHash=${hash}`)
      setTrackers(result.data);
      setFTrackers(result.data)
      setDataState(true)
      // console.log(result)
      return result.data
    }
    fetchData()
  }, [])
  
  return (
    <Container>
      <div className = "searchContainer">
        <div className  = "searchBar">
          <TextField id="standard-secondary"  
          fullWidth label="Filter By Hours Parked"
          onChange = {filterByHours}
          helperText = "Use 24 or 36 or 72 as SearchKeys"
          color="primary"
          
          />
        </div>

      </div>
      
      
      {
        dataState ? (
          <ParkedPageTable data = {fTracker}/>
       
        ):(
          <Loader/>
        )
      }
  
    </Container>
    
  )
}
