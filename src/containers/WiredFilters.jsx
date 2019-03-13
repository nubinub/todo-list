import { connect } from 'react-redux';
import { setFilter } from '../actions/todo.action';
import Filters from '../components/Filters/Filters';

const mapStateToProps = ({filter}) => ({
    filter,
});

const mapDispatchToProps = ({
    setFilter,
});

const WiredFilters = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default WiredFilters;

