
import { useEffect, useState } from 'react';
import './App.css'
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import useFetch from './hooks/useFetch'

function App() {

  const [updateInfo, setUpdateInfo] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const baseUrl = 'https://users-crud.academlo.tech'
  const [ 
    users, 
    getUsers, 
    createUser, 
    deleteUser, 
    updateUser
  ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, []);

  console.log(users)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <h1> USERS CRUD </h1>

      <button className='btn_button' onClick={handleModal}>Create New User</button>
      <div>
      
      {
        isModalOpen
        ? 
          <FormUser 
          createUser = {createUser}
          updateInfo = {updateInfo}
          updateUser = {updateUser}
          setUpdateInfo = {setUpdateInfo}
          isModalOpen = { isModalOpen }
          handleModal = {handleModal}
          />
        : ''
      }
      </div>
      
      <div>
        {
          users?.map( user => (
            <UserCard 
              key={user.id}
              user = {user}
              deleteUser = { deleteUser }
              setUpdateInfo = {setUpdateInfo}
              handleModal = { handleModal }
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
