

const UserCard = ( { user, deleteUser, setUpdateInfo, handleModal } ) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
    }

    const handleTWoButton = () => {
      handleUpdate();
      handleModal();
    }

  return (
    <div className="card_container_container">
      <article className="card_container">
      <div>
        <h3 className="card_title">#{ user.first_name} {user.last_name}</h3>
        <ul className="card_list">
          <li className="list"><span>CORREO: </span><span> { user.email } </span></li>
          <li className="list"><span>CUMPLEAÑOS: </span><span> { user.email } </span></li>
        </ul>
        <button className="card_btn" onClick={handleDelete}>Delete</button>
        <button className="card_btn" onClick={ handleTWoButton }>Edit</button>
      </div>
      </article>
    </div>
    
  )
}

export default UserCard
