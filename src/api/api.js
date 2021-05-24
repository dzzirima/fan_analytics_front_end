/// this file handles all the files for accessing the backend 
import axios from 'axios'
let api = {}
//authentication
let authUrl = "http://api.navixy.com/v2/user/auth"
let trackersUrl = "https://api.navixy.com/v2/tracker/list"



api.getGlobalhash =  async (userName ,password ) =>{
    // let authBody = {
    //     "login": "admin@smartworldsolutions.net",
    //     "password": "#fanmain123!"
    // }
    let authBody2 = {
        "login":`${userName}`,
        "password":`${password}`
    }
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
    var globalHash = localStorage.getItem('globalHash')
    return globalHash
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
        let trackers = await axios.get(trackersUrl,{
            params:{
                hash:globalHash
            }
        });
        console.log(trackers.data)
        
    } catch (error) {
        console.log(error)
        
    }
}


export default api;