import {connect} from 'react-redux';
import About from './About';


const mapStateToProps = state => ({
  color: state.colorTheme,
});


export default connect(mapStateToProps)(About);