
const reducerName = 'organizer'
const createActionName = name => `root/${reducerName}/${name}`;

export const ADD_TODO = createActionName('ADD_TODO');


export const createAction_addToDo = payload => ({ payload , type: ADD_TODO});

export default function reducer (state=[], action={}) {
	switch (action.type) {
		case ADD_TODO:
		  return {...action.payload};
		default:
		  return state;
	}
}