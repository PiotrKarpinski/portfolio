import {connect} from 'react-redux';
import Header from './Header';


const mapStateToProps = state => ({
  color: state.colorTheme,
});


export default connect(mapStateToProps)(Header);