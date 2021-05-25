import React from 'react';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inside:{
          display:'block',
          width:"80%"
      },
      linearLoader:{
        width :'90%',
        marginTop: theme.spacing(2),

      }
      
    },
  ),
);
export default function CircularLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className = {classes.inside}>
            <Typography 
            className ={classes.root}
            variant = "h5"
            >
            Hello we are getting your  Data ....</Typography>
            <div className = {classes.root} >
            <LinearProgress 
                thickness = {4}
                className = {classes.linearLoader}/>
                
            </div>
        </div>

       
         {/* <CircularProgress 
                     thickness={4}
                     value={100}
                 />  */}
    
    </div>
  );
}
