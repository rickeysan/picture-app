import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util';

function App() {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUesrs = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUesrs()
  }, [])

  return (
    <div className="App">
      <input placeholder="Name..." onChange={(event) => { setNewName(event.target.value) }} />
      <input placeholder="Age..." type="number" onChange={(event) => { setNewAge(event.target.value) }} />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>age: {user.age}</h1>
            <button onClick={() => { updateUser(user.id, user.age) }}>Increate age</button>
            <button onClick={() => { deleteUser(user.id) }}>Delete Uesr</button>
          </div>
        )
      })}
    </div>
  )
}

export default App;
