import { ADD_TODO } from "../actions/todo.action";

const initialState = {
    todos: [],
    currentId: 1,
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id: state.currentId, name: action.name}],
                currentId: state.currentId + 1,
            };
        default:
            return state;
    }
};

export default todoReducer;