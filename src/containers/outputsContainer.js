import { connect } from 'react-redux';
import Outputs from '../components/Outputs';

const mapStateToProps = state => ({
    data: state
});



export default connect(mapStateToProps)(Outputs);

