import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) => <ToDo {...todo}/>)}
        </ul>
    );
};

export default ToDoList;