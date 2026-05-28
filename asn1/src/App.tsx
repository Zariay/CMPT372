import { useState } from 'react'
import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Notes App</h1>
    <NoteEditor />
    <NoteList />
    </div>
  )
}

export default App
