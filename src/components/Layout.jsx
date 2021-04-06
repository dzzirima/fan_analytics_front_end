import { makeStyles,Drawer, Typography } from '@material-ui/core'
import React from 'react'



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
    }
})

const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className = {classes.root}>
        <Drawer 
            className = {classes.drawer}
            //overiding one of the classes inside the drawer
            classes = {{paper:classes.paperDrawer}}
            variant = "permanent"
            anchor = "left"
        >
            <Typography> Heloo</Typography>
        </Drawer>

        <div className ={classes.page}>
            {children}
        </div>
        </div>
    )
}

export default Layout
