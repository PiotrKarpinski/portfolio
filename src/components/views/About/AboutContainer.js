import {connect} from 'react-redux';
import {createAction_reverseCard} from '../../../redux/AboutRedux';
import About from './About';


const mapStateToProps = state => ({
  color: state.colorTheme,
  card: state.card,

});

const mapDispatchToProps = (dispatch,props) => ({
	reverseCard: props => dispatch(createAction_reverseCard({
		props
	})),
})


export default connect(mapStateToProps,mapDispatchToProps)(About);