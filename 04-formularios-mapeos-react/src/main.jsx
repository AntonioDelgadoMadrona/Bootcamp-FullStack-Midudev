import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const notes = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-05-19",
    important: true
  },
  {
    id: 2,
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2023-05-20",
    important: false
  },
  {
    id: 3,
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-05-21",
    important: true
  },
  {
    id: 4,
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2023-05-22",
    important: false
  },
  {
    id: 5,
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-05-23",
    important: true
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  // El StrictMode puede provocar rerenders, al menos duplicar los console.log
  <React.StrictMode>
    <App defaultNotes={notes} />
  </React.StrictMode>,
)
