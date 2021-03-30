import Card from './Card'
import TodoAdd from './TodoAdd'
import useLocalStorage from '../hooks/useLocalStorage'

const Container = () => {
	const [todo] = useLocalStorage('todometer-ds-crusaders')

	return (
		<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 place-items-center'>
			{todo.todos.map(({ name, done, later, undone }) => (
				<Card name={name} done={done} later={later} undone={undone} />
			))}
			<TodoAdd />
		</div>
	)
}

export default Container
