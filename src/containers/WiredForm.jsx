import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.action';
import Form from '../components/Form/Form';

const mapDispatchToProps = ({
    addTodo,
});

const WiredForm = connect(undefined, mapDispatchToProps)(Form);

export default WiredForm;

