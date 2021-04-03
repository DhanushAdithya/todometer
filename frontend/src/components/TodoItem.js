import { FaCheck, FaPause, FaPlay, FaTrash, FaRedo } from 'react-icons/fa'
import { connect } from 'react-redux'
import {
	markDone,
	markLater,
	markUndone,
	removeItem,
} from '../store/actions/actionCreators'

const TodoItem = ({
	group,
	todo,
	state,
	deleteItem,
	markDone,
	markLater,
	markUndone,
}) => (
	<div
		className={`flex justify-between w-full h-10 md:h-12 items-center bg-gray-600 pl-4 rounded-md my-2 border-l-8 ${
			state === 'done'
				? 'border-green-400'
				: state === 'later'
				? 'border-yellow-400'
				: 'border-red-400'
		}`}
	>
		<span className='md:text-xl text-lg font-semibold text-gray-400 truncate'>
			{state === 'done' ? <del>{todo}</del> : todo}
		</span>
		<div className='grid grid-cols-3'>
			{state !== 'done' ? (
				<FaCheck
					className='mx-2 cursor-pointer text-green-400 text-lg'
					onClick={() => markDone([group, todo])}
				/>
			) : (
				<FaRedo
					className='mx-2 cursor-pointer text-green-400 text-lg'
					onClick={() => markUndone([group, todo])}
				/>
			)}
			{state !== 'later' ? (
				<FaPause
					className='mx-2 cursor-pointer text-yellow-400 text-lg'
					onClick={() => markLater([group, todo])}
				/>
			) : (
				<FaPlay
					className='mx-2 cursor-pointer text-yellow-400 text-lg'
					onClick={() => markUndone([group, todo])}
				/>
			)}
			<FaTrash
				className='mx-2 cursor-pointer text-red-400 text-lg mr-5'
				onClick={() => deleteItem([group, todo])}
			/>
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	deleteItem: name => dispatch(removeItem(name)),
	markDone: name => dispatch(markDone(name)),
	markLater: name => dispatch(markLater(name)),
	markUndone: name => dispatch(markUndone(name)),
})

export default connect(null, mapDispatchToProps)(TodoItem)
