import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) => <ToDo key={todo.id} {...todo}/>)}
        </ul>
    );
};

export default ToDoList;