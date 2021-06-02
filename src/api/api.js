/// this file handles all the files for accessing the backend 
import axios from 'axios'
let api = {}
//authentication
let authUrl = "https://api.navixy.com/v2/user/auth"
let trackersUrl = "https://api.navixy.com/v2/tracker/list"
let locationUrl = "https://fananalytics.herokuapp.com/location"
let localurl = "http://localhost:8001/location"



api.getGlobalhash =  async (userName ,password ) =>{
    // let authBody = {
    //     "login": "admin@smartworldsolutions.net",
    //     "password": "#fanmain123!"
    // }
    let authBody2 = {
        "login":`${userName}`,
        "password":`${password}`
    }

    console.log(userName,password)
    try {
        const response = await  axios({
            method:'POST',
            url :authUrl,
            headers :{
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(authBody2),
        })
        storeGlobalHashToLocalStorage(response.data)

    } catch (error) {
        console.log(error)
    }
}

/// function to set the  global hash to local storage
function storeGlobalHashToLocalStorage(globalHash){
    localStorage.setItem('globalHash',JSON.stringify(globalHash))

}
// function  to get the global hash from local storage
api.getGlobalHashFromLocalStorage = () =>{
    try {
        var globalHash = JSON.parse(localStorage.getItem('globalHash')).hash
        return globalHash
        
    } catch (error) {
        console.log(error) 
    } 
}
//get get login status
api.loginStatus = () =>{
    try {
    let globalHash = JSON.parse(api.getGlobalHashFromLocalStorage())
    console.log(globalHash['success'])
    return globalHash.success ? true :false    
    } catch (error) {
        return false
    }
}

// funtion to get the all the trackers
api.getTrackers = async (globalHash) =>{
    try {
        // let response = await axios.get(localurl,{
        //     params:{
        //         hash:globalHash
        //     }
        // });
        // console.log(response.data)
        // return(response);
        let globalHash = "5d7cc3654eeaf628d3355a468f08bedc"
        let response = await axios.get(`${localurl}?globalHash=${globalHash}`)
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        
    }
}

// api.getTrackers("david");


export default api;