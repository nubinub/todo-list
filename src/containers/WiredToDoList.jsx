import { connect } from 'react-redux';
import { archiveTodo, deleteTodo } from '../actions/todo.action';
import ToDoList from '../components/ToDoList/ToDoList';

const getFilteredTodos = (filter, todos) => 
    todos.filter((t) => 
        filter === 'all' || (filter === 'archived' && t.archived ) || (filter === 'active' && !t.archived)
    );

const mapStateToProps = ({todos, filter}) => ({
    todos: getFilteredTodos(filter, todos),
});

const mapDispatchToProps = ({
    archiveTodo,
    deleteTodo,
});

const WiredToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default WiredToDoList;

