import '../Notes/ListNotes.css'
import { useState } from 'react'

export default function ListNotes({notes, remove}){
    const handleRemove = (index) =>{
        const removeNote = [...notes]
        removeNote.splice(index, 1)
        remove(removeNote)
    }

    return(
        <ul>
            {notes.map((note, i) => 
            <li className='notes' key={note}>
                <span>{note.title}</span>
                <span>
                    <span className='btn-small btn-success'>^</span>
                    <span onClick={() => handleRemove(i)} className="btn-small btn-danger">X</span>
                </span>
            </li>)}
        </ul>
    )
}