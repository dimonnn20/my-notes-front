import './App.css'
import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { fetchNotes } from './services/notes'
import moment from 'moment/moment'

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem:"date",
    sortOrder:"desc",
  });

  useEffect (()=> {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes);
    };

    fetchData();
  },[filter]);

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm/>
        <Filters filter={filter} setFilter={setFilter}/>
        </div>

        <ul className='flex flex-col gap-5 flex w-1/2'>
        {notes.map((n)=> (
          <li key={n.id}>
          <Note 
          title={n.title}
          description={n.description}
          createdAt={moment(n.createdAt).format("DD/MM/YYYY H:mm:ss")}
          />
        </li>
        ))}
        </ul>
    </section>
  )
}


export default App
