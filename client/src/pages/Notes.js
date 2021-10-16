import React, { useState } from 'react';
import CreateNote from '../components/CreateNote';
import MiniDrawer from '../components/MiniDrawer';
import Note from '../components/Note';
import '../components/Notes.css'

export default function Notes(props) {
    const[notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(preValue => {
            return [...preValue, newNote];
        });
    }

    function deleteNotes(id) {
        setNotes(preValue => {
            return [...preValue.filter((note, index) =>
                index !== id)];
        });
    }
    return (
        <div>
            <MiniDrawer />
            <CreateNote onAdd={addNote} />
            {notes.map((note, index) => (
                <Note 
                    key={index} 
                    id={index} 
                    title={note.title} 
                    content={note.content} 
                    onDelete={deleteNotes}
                />
            ))}
        </div>
    )
}