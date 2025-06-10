import Input from '../Input/Input'
import Button from '../Button/Button'
import { useState } from 'react'
import '../Form/Form.css'

export default function Form({create}){
    const [value, setValue] = useState('')

    const addNotes = () =>{
        if(value.length === 0){
            return
        }else{
            const newNote = {
                title: value,
                complited: false
            }
            create(newNote)
            setValue('')
        }
    } 
    return(
        <div>
            <div className="form">
                <Input
                type='text'
                placeholder='Новая заметка'
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            <Button onClick={addNotes}>Добавить</Button>
            </div>
        </div>
    )
}