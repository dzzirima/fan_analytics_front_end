import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({

    highlighter:{
        border:((note)=>{
            if(note.category == 'todos')
            return '3px solid #150e56'
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
