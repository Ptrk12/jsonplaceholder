import React, { useEffect, useState } from 'react';
import User from './components/User';
import UserProps from './components/Types/UserProps';
import './components/styles/app.css'
import AddUser from './components/AddUser';
import Popup from './components/Popup';
import UserPage from './components/UserPage';



function App() {

  return (
    <div className="App">
      <UserPage />
    </div>
  );
}

export default App;
