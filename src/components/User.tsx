import React from 'react'
import UserProps from './UserProps';
import './styles/user.css'



const User = ({ id, name, email,onDelete }: UserProps) => {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
   <div className='userList'>
    <span>{name}</span>
    <span>{email}</span>
    <span>
      <button>edit</button>
      <button onClick={handleDelete}>delete</button>
    </span>
  </div>
  );
};

export default User