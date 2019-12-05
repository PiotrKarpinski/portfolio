
const reducerName = 'about'
const createActionName = name => `root/${reducerName}/${name}`;

export const REV_CARD = createActionName('REV_CARD');


export const createAction_reverseCard = payload => ({ payload , type: REV_CARD});

export default function reducer (state=[], action={}) {
	switch (action.type) {
		case REV_CARD:
		  return action.payload.props
		default:
		  return state;
	}
}