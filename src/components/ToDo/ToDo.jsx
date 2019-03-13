import React, {useCallback} from 'react';


const ToDo = ({id, name, completed, archived, archiveTodo, deleteTodo, completeTodo}) => {
    const complete = useCallback(() => completeTodo(id), [id]);
    const archive = useCallback(() => archiveTodo(id), [id]);
    const del = useCallback(() => deleteTodo(id), [id]);

    return (
        <li className="list-group-item container-fluid">
            <div className="row">
                <div className="col-sm-1">
                    <input 
                        type="checkbox" 
                        aria-label="Checkbox for following text input" 
                        checked={completed} onClick={complete} />
                </div>
                <div className="col-sm-8">
                    {name}
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-danger" onClick={del}>Delete</button>
                    {completed && (<button className="btn btn-primary" onClick={archive}>
                    {archived ? 'Unarchive' : 'Archive'}</button>)}
                </div>
            </div>
        </li>
    );
};

export default ToDo;