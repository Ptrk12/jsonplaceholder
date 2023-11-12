
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
    <button >edit</button>
      <button onClick={handleDelete}>delete</button>
      <Link to={`/albums/${id}`}>
        <i className='gg-album'></i>
      </Link>
    </div>
  </div>
  );
};

export default User