
const reducerName = 'colorChange'
const createActionName = name => `root/${reducerName}/${name}`;

export const CHANGE_COLOR = createActionName('CHANGE_COLOR');


export const createAction_changeColor = payload => ({ payload , type: CHANGE_COLOR});

export default function reducer (state=[], action={}) {
	switch (action.type) {
		case CHANGE_COLOR:
		  return action.payload.props;
		default:
		  return state;
	}
}