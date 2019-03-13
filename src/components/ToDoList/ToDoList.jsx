import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({todos, archiveTodo, deleteTodo}) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => <ToDo key={todo.id} {...todo} archiveTodo={archiveTodo} deleteTodo={deleteTodo}/>)}
        </ul>
    );
};

export default ToDoList;