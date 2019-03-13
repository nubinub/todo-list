import React from 'react';
import './App.css';
import WiredToDoList from './containers/WiredToDoList';
import WiredForm from './containers/WiredForm';
import WiredFilters from './containers/WiredFilters';

const App = () => {
  return (
    <>
      <WiredForm />
      <WiredFilters />
      <WiredToDoList />
    </>
  );
};

export default App;
