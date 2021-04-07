import { makeStyles,Drawer, Typography } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import SubjectOutlined from '@material-ui/icons/SubjectOutlined';
import {useHistory,useLocation } from 'react-router-dom'



// constant for the drawer with
const drawerWidth = 240;
const useStyles = makeStyles({
    page:{
        background:"#f8ede3",
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
        display:"flex"
    },
    active:{
        background:'#d8ac9c'
    }
})
// menu itmes that are gonn be displayed on the drawer
const menuItems = [
    {
        text:'My Notes',
        icon:<SubjectOutlined/>,
        path:'/'
    },
    {
        text:'Create Notes',
        icon:<AddCircleOutlinedIcon/>,
        path:'/create'
    },
    
]

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    return (
        <div className = {classes.root}>
        <Drawer 
            className = {classes.drawer}
            //overiding one of the classes inside the drawer
            classes = {{paper:classes.paperDrawer}}
            variant = "permanent"
            anchor = "left"
        >
            <dv>
             <Typography> Heloo</Typography>
            </dv>

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
            {children}
        </div>
        </div>
    )
}

export default Layout
