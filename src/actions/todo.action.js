export const ADD_TODO = 'ADD_TODO';
export const ARCHIVE_TODO = 'ARCHIVE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = (name) => ({
    type: ADD_TODO,
    name,
});

export const archiveTodo = (id) => ({
    type: ARCHIVE_TODO,
    id,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
});

export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    id,
});

