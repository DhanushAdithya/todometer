import Action from '../actions/actionTypes'

const initialState =
	JSON.parse(localStorage.getItem('todometer-ds-crusaders')) || []

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.ADD_GROUP: {
			state.todos.push({ group: action.name, items: [] })
			return state
		}

		case Action.REMOVE_GROUP: {
			const groups = state.todos.filter(e => e.group !== action.name)
			state = {
				todos: groups,
			}
			return state
		}

		case Action.ADD_ITEM: {
			const [groupName, itemName] = action.name
			const group = state.todos.filter(e => e.group === groupName)[0]
			group.items.push({ name: itemName, state: 'undone' })
			state = {
				todos: [...state.todos, group],
			}
			state = {
				todos: state.todos.filter(
					(v, i, a) => a.findIndex(e => e.group === v.group) === i
				),
			}
			return state
		}

		case Action.REMOVE_ITEM: {
			const [id, item] = action.name
			const group = state.todos.filter(e => e.group === id)[0]
			const edit = group.items.filter(e => e.name !== item)
			group.items = edit
			state = {
				todos: [...state.todos, group],
			}
			state = {
				todos: state.todos.filter(
					(v, i, a) => a.findIndex(e => e.group === v.group) === i
				),
			}
			return state
		}

		case Action.MARK_AS_DONE: {
			const [id, item] = action.name
			const group = state.todos.filter(e => e.group === id)[0]
			const edit = group.items.findIndex(e => e.name === item)
			group.items[edit] = { name: item, state: 'done' }
			state = {
				todos: [...state.todos, group],
			}
			state = {
				todos: state.todos.filter(
					(v, i, a) => a.findIndex(e => e.group === v.group) === i
				),
			}
			return state
		}

		case Action.PROCRASTINATE: {
			const [id, item] = action.name
			const group = state.todos.filter(e => e.group === id)[0]
			const edit = group.items.findIndex(e => e.name === item)
			group.items[edit] = { name: item, state: 'later' }
			state = {
				todos: [...state.todos, group],
			}
			state = {
				todos: state.todos.filter(
					(v, i, a) => a.findIndex(e => e.group === v.group) === i
				),
			}
			return state
		}

		case Action.MARK_AS_UNDONE: {
			const [id, item] = action.name
			const group = state.todos.filter(e => e.group === id)[0]
			const edit = group.items.findIndex(e => e.name === item)
			group.items[edit] = { name: item, state: 'undone' }
			state = {
				todos: [...state.todos, group],
			}
			state = {
				todos: state.todos.filter(
					(v, i, a) => a.findIndex(e => e.group === v.group) === i
				),
			}
			return state
		}

		// case Action.EDIT_ITEM:
		// 	return state
		default:
			return state
	}
}

export default todoReducer
