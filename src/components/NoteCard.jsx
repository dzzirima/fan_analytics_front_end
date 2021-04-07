import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { blue, green, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles({

    highlighter:{
        border:((note)=>{
            if(note.category == 'todos')
            return '3px solid #150e56'
        })
    },
    avatar:{
        backgroundColor:((note)=>{
            if(note.category == 'todos'){
                return yellow[700]
            }
            if(note.category == 'work'){
                return green[700]
            }
            if(note.category == 'money'){
                return green[700]
            }
            return blue[500]
                
        })
    }


})

function NoteCard({note ,handleDelete}) {
    // pass the prop to the usestyles
    const classes = useStyles(note)
    return (
        <Card elevation = {3} className = {classes.highlighter}>
            <CardHeader
                title = {note.title}
                subheader = {note.category}
                avatar = {
                    <Avatar className = {classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action = {
                    <IconButton onClick = {() =>{handleDelete(note.id)}}>
                         <DeleteIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant = "body2" color = "textSecondary">
                    {note.details}
                </Typography>

            </CardContent>
        </Card>
    )
}

export default NoteCard
