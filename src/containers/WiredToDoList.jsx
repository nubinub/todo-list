import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList/ToDoList';

const mapStateToProps = ({todos}) => ({
    todos,
});
  
// const mapDispatchToProps = ({
//     onTodoClick: toggleTodo
// })

const WiredToDoList = connect(mapStateToProps)(ToDoList);

export default WiredToDoList;

