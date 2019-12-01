import {connect} from 'react-redux';
import Footer from './Footer';


const mapStateToProps = state => ({
  color: state.colorTheme,
});




export default connect(mapStateToProps)(Footer);