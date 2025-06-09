import Input from '../Input/Input'
import Button from '../Button/Button'
import { useState } from 'react'

export default function Form({create}){
    const [value, setValue] = useState('')

    const addNotes = () =>{
        const newNote = [...value]
        create(newNote)
        setValue('')
    } 
    return(
        <div>
            <Input
                type='text'
                placeholder='Новая заметка'
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            <Button onClick={addNotes}>Добавить</Button>
        </div>
    )
}