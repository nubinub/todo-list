import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({todos, archiveTodo, deleteTodo, completeTodo}) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => 
                <ToDo 
                    key={todo.id} 
                    {...todo} 
                    archiveTodo={archiveTodo} 
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                />)}
        </ul>
    );
};

export default ToDoList;