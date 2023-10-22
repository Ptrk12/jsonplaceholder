import React from 'react'
import UserProps from './Types/UserProps';
import './styles/user.css'



const User = ({ id, name, email,onDelete }: UserProps) => {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
   <div className='userList'>
    <div className='userName'>
      <span>{name}</span>
    </div>
    <div className='userMail'>
      <span>{email}</span>
    </div>
    <div className='buttons'>
    <span>
      <button className='editButton'>edit</button>
      <button className='deleteButton' onClick={handleDelete}>delete</button>
    </span>
    </div>
  </div>
  );
};

export default User