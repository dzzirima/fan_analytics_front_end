import React, { useEffect, useState } from 'react'
import {Container, Grid, Paper} from "@material-ui/core"
import NoteCard from '../components/NoteCard'

export default function Notes() {
 const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(result =>result.json())
      .then(result =>setNotes(result))
  
  }, [])

  // function to handle the deletion of the note
  const handleDelete = async (id) =>{
    await fetch("http://localhost:8000/notes/"+id,{
      method:'Delete'
    })
    // updating the local state of the items
    const newNotes = notes.filter(note =>note.id != id)
    setNotes(newNotes)

  }

  return (
    <Container>
      <Grid container spacing = {3}>
        {
          notes.map(note =>(
            <Grid key ={note.id} item xs = {12} md = {6} lg = {4} >
              <NoteCard note = {note} handleDelete = {handleDelete}/>

            </Grid>
          ))
        }
       </Grid>
    </Container>
  )
}
