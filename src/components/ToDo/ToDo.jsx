import React from 'react';

const ToDo = ({id, name, archiveTodo, deleteTodo}) => {
    return (
        <li className="list-group-item">
            <input type="checkbox" aria-label="Checkbox for following text input" />
            {name}
            <button className="btn btn-primary" onClick={() => archiveTodo(id)}>Archive</button>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    );
};

export default ToDo;