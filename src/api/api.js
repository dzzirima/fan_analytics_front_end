/// this file handles all the files for accessing the backend 
import axios from 'axios'
let api = {}
//authentication
let authUrl = "http://api.navixy.com/v2/user/auth"

let authBody = {
    "login": "admin@smartworldsolutions.net",
    "password": "#fanmain123!"
}

api.getGlobalhash =  async (userName ,password ) =>{
    try {
        const response = await  axios({
            method:'POST',
            url :authUrl,
            headers :{
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(authBody),
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
function getGlobalHashFromLocalStorage(){
    var globalHash = localStorage.getItem('globalHash')
    return globalHash
}



export default api;