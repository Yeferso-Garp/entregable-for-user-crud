import { useEffect } from 'react';
import { useForm } from 'react-hook-form'


const FormUser = ( { createUser, updateInfo, updateUser, setUpdateInfo, isModalOpen, handleModal } ) => {

    const {handleSubmit, register, reset} = useForm();



    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo]);

    
    const submit = data => {
      if (updateInfo) {
        updateUser('/users', updateInfo.id, data)
        setUpdateInfo()
      } else {
        createUser('/users', data);
      }
      reset({
        name: '',
        genre: '',
        duration: '',
        release_date: ''
    })
    }


    

  return (
   <div className='form_container-container'>
        {
        isModalOpen
        ? <button className='btn_closet' onClick={handleModal}>X</button>
        : ''
      }
        <div className='form_container'>
          <form className='form_form' onSubmit={handleSubmit(submit)}>
            <div className='form_email' >
              <label htmlFor="email">Email</label>
              <input className='form_input' placeholder="Email" {...register('email')} type="email" id="email" />
            </div>
            <div className='form_password'>
              <label htmlFor="password">Password</label>
              <input className='form_input' placeholder="password" {...register('password')} type="password" id="password" />
            </div>
            <div className='form_first_name'>
              <label htmlFor="first_name">First name</label>
              <input className='form_input' placeholder="first name" {...register('first_name')} type="text" id="first_name" />
            </div>
            <div className='form_last_name'>
              <label htmlFor="last_name">Last name</label>
              <input className='form_input' placeholder="last name" {...register('last_name')} type="text" id="last_name" />
            </div>
            <div className='form_birthday'>
              <label htmlFor="birthday">Birthday</label>
              <input className='form_input' {...register('birthday')} type="date" id="birthday" />
            </div>
            <button > { updateInfo ? 'Update' : 'Create' } </button>
          </form>
        </div>
      
        </div>
    
  );
  }

export default FormUser;
