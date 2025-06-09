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
    <>
      <Form create={createNote}/>
      <ListNotes notes={notes}/>
    </>
  )
}

export default App
