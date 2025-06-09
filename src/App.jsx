import { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import ListNotes from './Components/Notes/ListNotes'

function App() {
  const [notes, setNotes] = useState([])
  const [value, setValue] = useState('')

  const addNotes = () =>{
    setNotes([...notes, value])
    setValue('')
  }

  return (
    <>
      <Input
      type='text'
      placeholder='Новая заметка'
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <Button onClick={addNotes}>Добавить</Button>
      <ListNotes notes={notes}/>
    </>
  )
}

export default App
