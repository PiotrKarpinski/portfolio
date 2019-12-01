import {connect} from 'react-redux';
import Calculator from './Calculator';


const mapStateToProps = state => ({
  color: state.colorTheme,
});




export default connect(mapStateToProps)(Calculator);