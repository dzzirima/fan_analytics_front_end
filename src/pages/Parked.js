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

let dummy = [{"id":827851,"name":"AJC4387","trackerId":827851,"location":"n/a","lastUpdateTime":"n/a","state":"n/a","mileage":"n/a","parkedTime":"a minute ago","group":"24"},{"id":827852,"name":"AEF5530","trackerId":827852,"location":"n/a","lastUpdateTime":"n/a","state":"n/a","mileage":"n/a","parkedTime":"2 minutes ago","group":"24"},{"id":827853,"name":"BAG5696","trackerId":827853,"location":"n/a","lastUpdateTime":"n/a","state":"n/a","mileage":"n/a","parkedTime":"a day ago","group":"36"},{"id":827854,"name":"AFG1345","trackerId":827854,"location":"n/a","lastUpdateTime":"n/a","state":"n/a","mileage":"n/a","parkedTime":"2 minutes ago","group":"24"},{"id":827855,"name":"BAJ827","trackerId":827855,"location":"n/a","lastUpdateTime":"n/a","state":"n/a","mileage":"n/a","parkedTime":"2 years ago","group":"others"}]
export default function ParkedReport(props) {
  const [trackers, setTrackers] = useState([]) // it should start with []

  const [dataState, setDataState] = useState(false) // set state to false at first

  const filterByHours = (event) =>{
    let searchKey = event.target.value
    // console.log(typeof(searchKey))
    let filteredTrackers = trackers.filter(function(tracker){
      return tracker.group === searchKey
    })

    // setTrackers(filteredTrackers)
    if(searchKey === "24" ||searchKey === "36" ||searchKey === "others"){
      setTrackers(filteredTrackers)

    }else if(searchKey === ""){
      setTrackers(dummy)
    }
    
    
  }

  useEffect(() => {
    async function fetchData(){
      let hash = await  api.getGlobalHashFromLocalStorage()
      const result = await axios.get(`parked?globalHash=${hash}`)
      setTrackers(result.data);
      setDataState(true)
      // console.log(result)
      return result
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
          <ParkedPageTable data = {trackers}/>
       
        ):(
          <Loader/>
        )
      }
  
    </Container>
    
  )
}
