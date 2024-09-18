import React from 'react'
import UserList from './components/UserList'
import data from './assets/data/data.json'
console.log(data);

function App() {
  return (
    <div>
      <UserList data ={data}></UserList>
    </div>
  )
}

export default App