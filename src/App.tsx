import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import usersData from './data/users'


function App() {
  const [users, setUsers] = useState(usersData);

  return (
    <div className="App">

      {users.map(user => (
        <Card name="renan" user={user}></Card>
      ))}

    </div>
  )
}

export default App
