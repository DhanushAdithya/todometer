import Action from '../actions/actionTypes'

const initialState = localStorage.getItem('todometer-ds-crusaders') || []

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.ADD_GROUP:
			return state
		case Action.REMOVE_GROUP:
			return state
		case Action.ADD_ITEM:
			return state
		case Action.REMOVE_ITEM:
			return state
		case Action.MARK_AS_DONE:
			return state
		case Action.PROCRASTINATE:
			return state
		case Action.EDIT_ITEM:
			return state
		default:
			return state
	}
}

export default todoReducer
