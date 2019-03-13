import React from 'react';

const ToDo = ({id, name, archiveTodo, deleteTodo}) => {
    return (
        <li>
            {name}
            <button onClick={() => archiveTodo(id)}>Archive</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    );
};

export default ToDo;