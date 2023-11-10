import React, { useEffect } from 'react'
import UserProps from '../../components/Types/UserProps';
import './userPage.css'
import { Link } from 'react-router-dom';



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
      <Link to={`/albums/${id}`}>Albums</Link>
    </span>
    </div>
  </div>
  );
};

export default User