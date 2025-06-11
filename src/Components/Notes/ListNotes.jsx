import { useEffect, useState } from 'react'
import '../Notes/ListNotes.css'

export default function ListNotes({notes, remove}){
    let [isActive, setIsActive] = useState(false)
    const handleRemove = (index) =>{
        const removeNote = [...notes]
        removeNote.splice(index, 1)
        remove(removeNote)
    }

    const handleSuccess = (index, event) =>{
        index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type == 'toggle'){
            isActive = notes[index].complited = !notes[index].complited
            setIsActive(isActive)
        }
    }

    useEffect(() =>{
        if(notes.length == 5){
            alert('5 значений')
        }
    }, [notes])

    return(
        <ul>
            {notes.map((note, i) => 
            <li className='notes' key={i}>
                <span className={`${note.complited ? 'text-decoration-line-through' : ''} `}>{note.title}</span>
                <span>
                    <span onClick={(e) => handleSuccess(i, e)}  data-type='toggle' data-index={i} className={`btn-small ${note.complited ? 'warning' : 'btn-success'}`}>^</span>
                    <span onClick={() => handleRemove(i)} data-index={i} className="btn-small btn-danger">X</span>
                </span>
            </li>)}
        </ul>
    )
}