import React from 'react';

const Filters = ({setFilter}) => {
    return (
        <ul className="filters">
            <li onClick={() => setFilter('all')}>All</li>
            <li onClick={() => setFilter('active')}>Active</li>
            <li onClick={() => setFilter('archived')}>Archived</li>
        </ul>
    );
};

export default Filters;