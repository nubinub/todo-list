import { connect } from 'react-redux';
import { archiveTodo, deleteTodo } from '../actions/todo.action';
import ToDoList from '../components/ToDoList/ToDoList';

const mapStateToProps = ({todos}) => ({
    todos,
});

const mapDispatchToProps = ({
    archiveTodo,
    deleteTodo,
});

const WiredToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default WiredToDoList;

