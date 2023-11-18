import React, { useEffect, useState } from 'react';
import UserProps from '../../components/Types/UserProps';
import AddUser from '../../components/AddUser';
import Popup from '../../components/Popup';
import User from './User';
import './userPage.css';
import Pagination from '../../components/Pagination';

const UserPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onAdd = async (name: string, email: string) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status !== 201) {
        return;
      }

      const data = await response.json();
      setUsers((users) => [...users, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });

      if (response.status !== 200) {
        return;
      }

      setUsers((users) => users.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const onEdit = async ({ name, email, id }: { name: string; email: string; id: number }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          email: email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status === 200) {
        console.log('User updated successfully');
      } else {
        console.log('Failed to update user');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnEdit = (id: number) => {
    console.log('Editing user with ID:', id);
    setEditingUserId(id);
  }

  const handleEditFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('nameInput') as HTMLInputElement;
    const emailInput = form.elements.namedItem('emailInput') as HTMLInputElement;
  
    if (emailInput.value.length > 0 && nameInput.value.length > 0) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editingUserId}`, {
          method: 'PUT',
          body: JSON.stringify({
            id: editingUserId,
            name: nameInput.value,
            email: emailInput.value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
  
        if (response.status === 200) {
          console.log('User updated successfully');
  
          const updatedUsers = users.map((user) =>
            user.id === editingUserId ? { ...user, name: nameInput.value, email: emailInput.value } : user
          );
          setUsers(updatedUsers);
        } else {
          console.log('Failed to update user');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setEditingUserId(null);
        emailInput.value = '';
        nameInput.value = '';
      }
    }
  };
  
  
  

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <br />
      <button className="addUserButton" onClick={openPopup}>
        Add user
      </button>
      {isPopupVisible && (
        <Popup onClose={closePopup}>
          <AddUser onAdd={onAdd} />
        </Popup>
      )}
      <div className="userPage">
        {currentUsers.map((user) => (
          <div key={user.id}>
            <User
              id={user.id}
              name={user.name}
              email={user.email}
              onDelete={() => onDelete(user.id)}
              onEdit={() => handleOnEdit(user.id)}
            />
            {editingUserId === user.id && (
              <form key={`edit-form-${user.id}`} onSubmit={handleEditFormSubmit}>
                <button type="button" onClick={() => setEditingUserId(null)}>Close</button>
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" name="nameInput" placeholder="Enter name" required />

                <label htmlFor="emailInput">Email:</label>
                <input type="email" id="emailInput" name="emailInput" placeholder="Enter email" required />

                <button type="submit">Save</button>
              </form>
            )}
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} total={users.length} limit={5} onPageChange={(page: number) => setCurrentPage(page)} />
    </div>
  );
};

export default UserPage;
