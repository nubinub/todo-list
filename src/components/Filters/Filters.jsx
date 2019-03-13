import React from 'react';
import classNames from 'classnames';

const Filters = ({setFilter, filter}) => {
    const getClassNamesByFilter = (filt) => {
        return classNames('btn', {'btn-secondary': filter !== filt, 'btn-primary': filter === filt})
    };
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button 
                type="button" 
                onClick={() => setFilter('all')} 
                className={getClassNamesByFilter('all')}
            >
                All
            </button>
            <button 
                type="button" 
                onClick={() => setFilter('active')} 
                className={getClassNamesByFilter('active')}
            >
                To do
            </button>
            <button 
                type="button" 
                onClick={() => setFilter('done')} 
                className={getClassNamesByFilter('done')}
            >
                Done
            </button>
            <button 
                type="button" 
                onClick={() => setFilter('archived')} 
                className={getClassNamesByFilter('archived')}
            >
                Archived
            </button>
        </div>
    );
};

export default Filters;