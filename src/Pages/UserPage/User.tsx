import { useState } from 'react';
import UserProps from '../../components/Types/UserProps';
import './userPage.css'
import { Link } from 'react-router-dom';

const User = ({ id, name, email, onDelete, onEdit }: UserProps) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleDelete = () => {
    onDelete?.(id);
  };

  const handleEdit = () => {
    onEdit(); 
  };

  return (
    <div className='userList'>
      <div className='userName'>
        <span>{name}</span>
      </div>
      <div className='userMail'>
        <span>{email}</span>
      </div>
      <div className='buttons'>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        <Link to={`/albums/${id}`}>
          <i className='gg-album'></i>
        </Link>
        <Link to={`/posts/${id}`}>
          User posts
        </Link>
      </div>
    </div>
  );
};

export default User;
