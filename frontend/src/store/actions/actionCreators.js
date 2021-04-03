import Action from './actionTypes'

const removeItem = name => dispatch => {
	const [id, item] = name
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const group = db.todos.filter(e => e.group === id)[0]
	const edit = group.items.filter(e => e.name !== item)
	group.items = edit
	const modified = db.todos.filter(e => e.group !== id)
	modified.push(group)
	db = {
		todos: modified,
	}

	console.log('boom')

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))

	return dispatch({
		type: Action.REMOVE_ITEM,
		name,
	})
}

const addGroup = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	db.todos.push({ group: name, items: [] })

	console.log('boom')

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))

	return dispatch({
		type: Action.ADD_GROUP,
		name,
	})
}

const removeGroup = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const groups = db.todos.filter(e => e.group !== name)
	db = {
		todos: groups,
	}

	console.log('boom')

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))

	return dispatch({
		type: Action.REMOVE_GROUP,
		name,
	})
}

const addItem = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const [groupName, itemName] = name
	const group = db.todos.filter(e => e.group === groupName)[0]
	group.items.push({ name: itemName, state: 'undone' })
	db = {
		todos: [...db.todos, group],
	}
	db = {
		todos: db.todos.filter(
			(v, i, a) => a.findIndex(e => e.group === v.group) === i
		),
	}

	console.log('boom')

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))
	return dispatch({
		type: Action.ADD_ITEM,
		name,
	})
}

const markDone = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const [id, item] = name
	const group = db.todos.filter(e => e.group === id)[0]
	const edit = group.items.findIndex(e => e.name === item)
	group.items[edit] = { name: item, state: 'done' }
	db = {
		todos: [...db.todos, group],
	}
	db = {
		todos: db.todos.filter(
			(v, i, a) => a.findIndex(e => e.group === v.group) === i
		),
	}

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))
	return dispatch({
		type: Action.MARK_AS_DONE,
		name,
	})
}

const markLater = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const [id, item] = name
	const group = db.todos.filter(e => e.group === id)[0]
	const edit = group.items.findIndex(e => e.name === item)
	group.items[edit] = { name: item, state: 'later' }
	db = {
		todos: [...db.todos, group],
	}
	db = {
		todos: db.todos.filter(
			(v, i, a) => a.findIndex(e => e.group === v.group) === i
		),
	}

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))
	return dispatch({
		type: Action.PROCRASTINATE,
		name,
	})
}

const markUndone = name => dispatch => {
	let db = JSON.parse(localStorage.getItem('todometer-ds-crusaders'))
	const [id, item] = name
	const group = db.todos.filter(e => e.group === id)[0]
	const edit = group.items.findIndex(e => e.name === item)
	group.items[edit] = { name: item, state: 'undone' }
	db = {
		todos: [...db.todos, group],
	}
	db = {
		todos: db.todos.filter(
			(v, i, a) => a.findIndex(e => e.group === v.group) === i
		),
	}

	localStorage.setItem('todometer-ds-crusaders', JSON.stringify(db))
	return dispatch({
		type: Action.MARK_AS_UNDONE,
		name,
	})
}

export {
	removeItem,
	addGroup,
	removeGroup,
	addItem,
	markDone,
	markLater,
	markUndone,
}
