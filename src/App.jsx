import { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import ListNotes from './Components/Notes/ListNotes'
import Form from './Components/Form/Form'

function App() {
  const [notes, setNotes] = useState([])

  const createNote = (newNote) =>{
    setNotes([...notes, newNote])
  }

  return (
    <div className='container'>
      <h1>Заметки</h1>
      <Form create={createNote}/>
      <ListNotes notes={notes}/>
    </div>
  )
}

export default App
