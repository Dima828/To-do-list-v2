import { useState } from 'react'
import './App.css'
import ListNotes from './Components/Notes/ListNotes'
import Form from './Components/Form/Form'

function App() {
  const [notes, setNotes] = useState([
    {id: 1, title: '111', complited: false},
    {id: 2, title: '222', complited: false},
    {id: 3, title: '333', complited: false},
  ])

  const createNote = (newNote) =>{
    setNotes([...notes, newNote])
  }

  const removeNote = (remNote) =>{
    setNotes(remNote)
  }

  return (
    <div className='container'>
      <h1>Заметки</h1>
      <Form create={createNote}/>
      {notes.length === 0 ? <p>Нет заметокв</p> : <ListNotes remove={removeNote} notes={notes}/>}
    </div>
  )
}


export default App
