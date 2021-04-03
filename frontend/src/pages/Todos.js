import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux'

import TodoItem from '../components/TodoItem'
import { addItem } from '../store/actions/actionCreators'

const Todos = ({ id, todos, addItem }) => {
	const [item, setItem] = useState('')

	const group =
		todos &&
		todos.filter(e => e.group.toLowerCase().split(/\s+/).join('-') === id)[0]

	const done = group.items.filter(e => e.state === 'done')
	const later = group.items.filter(e => e.state === 'later')
	const undone = group.items.filter(e => e.state === 'undone')

	return (
		<div className='lg:w-1/2 lg:px-0 md:container px-8 mx-auto'>
			<div className='flex items-center bg-gray-800'>
				<input
					className='w-full bg-gray-800 outline-none px-4 py-2 text-gray-400 text-xl'
					placeholder='Add Item...'
					type='text'
					value={item}
					onChange={e => setItem(e.target.value)}
				/>
				<div className='h-full p-2 cursor-pointer'>
					<FaPlus
						className='text-2xl text-gray-400'
						onClick={() =>
							item && addItem([group.group, item]) && setItem('')
						}
					/>
				</div>
			</div>
			<div className='w-full h-4 mt-5 mb-2 flex bg-gray-700'>
				<div
					className='h-full transition bg-green-400'
					style={{
						width: `calc(100% * ${done.length / group.items.length})`,
					}}
				></div>
				<div
					className='h-full transition bg-yellow-400'
					style={{
						width: `calc(100% * ${later.length / group.items.length})`,
					}}
				></div>
				<div
					className='h-full transition bg-red-400'
					style={{
						width: `calc(100% * ${undone.length / group.items.length})`,
					}}
				></div>
			</div>
			{undone.length ? (
				<>
					<h1 className='text-xl pt-3 font-semibold text-gray-300'>
						Not Done Yet
					</h1>
					{undone.map(({ name, state }) => (
						<TodoItem group={group.group} todo={name} state={state} />
					))}
				</>
			) : null}
			{later.length ? (
				<>
					<h1 className='text-xl pt-1 font-semibold text-gray-300'>
						Marked for Later
					</h1>
					{later.map(({ name, state }) => (
						<TodoItem group={group.group} todo={name} state={state} />
					))}
				</>
			) : null}
			{done.length ? (
				<>
					<h1 className='text-xl pt-1 font-semibold text-gray-300'>
						Done
					</h1>
					{done.map(({ name, state }) => (
						<TodoItem group={group.group} todo={name} state={state} />
					))}
				</>
			) : null}
		</div>
	)
}

const mapStateToProps = todos => todos

const mapDispatchToProps = dispatch => ({
	addItem: data => dispatch(addItem(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
