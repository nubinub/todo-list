import React from 'react';
import './App.css';
import WiredToDoList from './containers/WiredToDoList';
import WiredForm from './containers/WiredForm';
import WiredFilters from './containers/WiredFilters';

const App = () => {
  return (
    <div className="container">
      <h1>TodoList</h1>
      <WiredForm />
      <WiredFilters />
      <WiredToDoList />
    </div>
  );
};

export default App;
