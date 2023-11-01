import React, { useEffect, useState } from 'react'
import UserProps from '../../components/Types/UserProps';
import AddUser from '../../components/AddUser';
import Popup from '../../components/Popup';
import User from './User';
import './userPage.css'

const UserPage = () => {

  const[users, setUsers] = useState<UserProps[]>([]);
  
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    });
  } 

  const onAdd = async(name:string,email:string)=>{
    await fetch('https://jsonplaceholder.typicode.com/users',{
      method: 'POST',
      body: JSON.stringify({
        name:name,
        email:email
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      }
    })
    .then((res)=>{
      if(res.status !== 201){
        return;
      }else{
        return res.json();
      }
    })
    .then((data)=>{
      setUsers((users)=>[...users,data]);
    }).catch((err)=>{
      console.log(err)
    })
  }

  const onDelete = async (id:number) =>{
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method: 'DELETE'})
      .then((res)=>{
        if(res.status!==200){
          return;
        }else{
          setUsers(users.filter((user)=>{
            return user.id !==id
          }))
        }
      }).catch((err)=>{
        console.log(err)
      })
  }

  return (
    <div>
            <br />
      <button className='addUserButton' onClick={openPopup}>Add user</button>
      {isPopupVisible && (
        <Popup onClose={closePopup}>
          <AddUser onAdd={onAdd}/>
        </Popup>
      )}
      <div className='userPage'>
        {
        users.map((user)=>
        (<User id={user.id} key ={user.id} name = {user.name} email ={user.email} onDelete={onDelete}/>))
        }
      </div>
    </div>
  )
}

export default UserPage