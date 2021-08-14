import { makeStyles,Drawer, Typography, Button } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {useHistory,useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SpeedIcon from '@material-ui/icons/Speed';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';


// constant for the drawer with
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>{
    return{
        page:{
            background:"#fff6f6",
            width:'100%',
            height :'100vh'
        },
        drawer:{
            width:drawerWidth
    
        },
        paperDrawer:{
            width:drawerWidth
        },
        root:{
            display:"flex",
            padding:theme.spacing(2)
        },
        active:{
            background:'#d8ac9c'
        },
        title:{
            padding:theme.spacing(2)
        },
        //calcultation in css
        appbar:{
            width: 'calc(100% - 240px)',
            backgroundColor:"#fafafa"
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1

        },
        avatar:{
            marginLeft:theme.spacing(2)
        },
        logo:{
            width:150,
            height:70,
        }
    }  
})
// menu itmes that are gonn be displayed on the drawer
const menuItems = [
    {
        text:'Vehicle Location',
        icon:<LocationOnIcon/>,
        path:'/location'
    },
    {
        text:'Mileage Report',
        icon:<SpeedIcon/>,
        path:'/fuel'
    },
    {
        text:'Parked Vehicles',
        icon:<EmojiTransportationIcon/>,
        path:'/parked'
    }

    
    
]

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    return (
        <div className = {classes.root}>
        <AppBar 
            className = {classes.appbar}
            elevation = {0}
        >
            <Toolbar color  = "secondary">
                <Typography variant ="h5" color = "textSecondary" className = {classes.date}>
                   Fleet Analysis : {format(new Date(),'do MMMM Y')}
                </Typography>
                <div className = {classes.logo}>
                    <img src='./fantracker_logo.jpg' alt= "Logo"  className = {classes.logo}/>
                </div>
                {/* <Avatar src = '/logo.JPG' className = {classes.avatar}/> */}
                <Button
                onClick = {() =>{history.push('/Login')}}
                > Login </Button>
            </Toolbar>
        </AppBar>
        
        <Drawer 
            className = {classes.drawer}
            //overiding one of the classes inside the drawer
            classes = {{paper:classes.paperDrawer}}
            variant = "permanent"
            anchor = "left"
        >
            <div className = {classes.title}>
             <Typography> FanAnalytics</Typography>
            </div>

            {/* list all the links */}
            <List>
                {
                    menuItems.map((item) =>(
                        <ListItem
                            button
                            key = {item.text}
                            onClick= {() =>{history.push(item.path)}}
                            className = {location.pathname == item.path?classes.active :null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text}/>
                        </ListItem>
                    ))
                }
            </List>
            
        </Drawer>
        <div className ={classes.page}>
                {/* create some spacing here for the div to go down :he height of this div should be equl  toolbar */}
            <div className = {classes.toolbar}>

            </div>
            {children}
        </div>
        </div>
    )
}

export default Layout
