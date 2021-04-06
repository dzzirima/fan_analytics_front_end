import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Typography } from '@material-ui/core';

function NoteCard({note ,handleDelete}) {
    return (
        <Card elevation = {3}>
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
