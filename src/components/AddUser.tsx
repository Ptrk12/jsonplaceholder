import React from 'react'
import AddUserProps from './Types/AddUserProps'
import './styles/addUser.css'

const AddUser:React.FC<AddUserProps> = ({onAdd}) => {

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    if(nameInput.value.length > 0 && emailInput.value.length > 0){
      onAdd(nameInput.value,emailInput.value);
      nameInput.value = "";
      emailInput.value = "";
    }

  }

  return (
    <div>
      <form className='form' onSubmit={handleOnSubmit}>
        <input placeholder='Name' name='name'/>
        <input placeholder='Email' name='email'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddUser