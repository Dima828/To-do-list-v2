export default function ListNotes({notes}){
    return(
        <ul>
            {notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
    )
}