import { connect } from 'react-redux';
import { archiveTodo, deleteTodo, completeTodo } from '../actions/todo.action';
import ToDoList from '../components/ToDoList/ToDoList';

const getFilteredTodos = (filter, todos) => 
    todos.filter((t) => 
        filter === 'all' || (filter === 'archived' && t.archived ) || (filter === 'active' && !t.archived && !t.completed)
        || (filter === 'done' && !t.archived && t.completed)
    );

const mapStateToProps = ({todos, filter}) => ({
    todos: getFilteredTodos(filter, todos),
});

const mapDispatchToProps = ({
    archiveTodo,
    deleteTodo,
    completeTodo,
});

const WiredToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default WiredToDoList;

