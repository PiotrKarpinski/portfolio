import {connect} from 'react-redux';
import {createAction_changeColor} from '../../../redux/changeColorRedux';
import PageNav from './PageNav';


const mapStateToProps = state => ({
  color: state.colorTheme,
});

const mapDispatchToProps = (dispatch,props) => ({
	changeColor: props => dispatch(createAction_changeColor({
		props
	})),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageNav);