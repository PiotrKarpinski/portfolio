import {connect} from 'react-redux';
import Projects from './Projects';


const mapStateToProps = state => ({
  color: state.colorTheme,
});


export default connect(mapStateToProps)(Projects);