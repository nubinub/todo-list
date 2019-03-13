import React from 'react';
import './App.css';
import WiredToDoList from './containers/WiredToDoList';
import WiredForm from './containers/WiredForm';

const App = () => {
  return (
    <>
      <WiredForm />
      <WiredToDoList />
    </>
  );
};

export default App;
