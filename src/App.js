//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';
function App() {
  return( 
  <div>
    <h1>My Todos</h1>
    <Todo text = 'Learn react'/>
    <Todo text = 'Master react'/>
    <Modal/>
    <Backdrop/>
  </div>
  );
}

export default App;
