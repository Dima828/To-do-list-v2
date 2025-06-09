import '../Notes/ListNotes.css'

export default function ListNotes({notes}){
    return(
        <ul>
            {notes.map((note) => <li className="notes" key={note}>{note}</li>)}
        </ul>
    )
}