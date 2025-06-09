import Button from './Components/Button/Button'
import Input from './Components/Input/Input'

export default function Form(){
    const [notes, setNotes] = useState([])
    const [value, setValue] = useState('')

    const addNotes = () =>{
    setNotes([...notes, value])
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