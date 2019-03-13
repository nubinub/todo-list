import { ADD_TODO, ARCHIVE_TODO, DELETE_TODO } from "../actions/todo.action";

const initialState = {
    todos: [],
    currentId: 1,
};

const archiveTodo = (state, id) => {
    const todos = state.todos.map((t) => t.id === id ? {...t, archived: !t.archived} : t);
    return {
        ...state,
        todos,
    };
};

const deleteTodo = (state, id) => {
    const todos = state.todos.filter((t) => t.id !== id);
    return {
        ...state,
        todos,
    };
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id: state.currentId, name: action.name}],
                currentId: state.currentId + 1,
            };

        case ARCHIVE_TODO:
            return archiveTodo(state, action.id);
        case DELETE_TODO:
            return deleteTodo(state, action.id);
        default:
            return state;
    }
};

export default todoReducer;