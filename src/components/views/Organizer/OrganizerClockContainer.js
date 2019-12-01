import {connect} from 'react-redux';
import OrganizerClock from './OrganizerClock';
import {createAction_addToDo} from '../../../redux/organizerRedux';


const mapStateToProps = state => ({
	color: state.colorTheme,
    title: state.organizer.title,
    daily: state.organizer.daily,
    description: state.organizer.description,
    time: state.organizer.time,
    duration: state.organizer.duration,
    barColor: state.organizer.color,

});

const mapDispatchToProps = (dispatch,props) => ({
	addToDo: props => dispatch(createAction_addToDo({
		...props
	})),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizerClock);


