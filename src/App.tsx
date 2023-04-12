import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import usersData from './data/users'
import api from './services/api'

function App() {
  const [users, setUsers] = useState(usersData);

  useEffect(
    () => {
      return () => api.get('/users').then(({data}) => {
        setUsers(data)
      })
    }, []
  )

  return (
    <div className="App">

      {users.map(user => (
        <Card name="renan" user={user}></Card>
      ))}

    </div>
  )
}

export default App
