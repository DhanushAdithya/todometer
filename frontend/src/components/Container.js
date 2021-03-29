import Card from './Card'
import TodoAdd from './TodoAdd'

const Container = () => {
	return (
		<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 place-items-center'>
			{['Morning', 'Afternoon', 'Night'].map(e => (
				<Card name={e} />
			))}
			<TodoAdd />
		</div>
	)
}

export default Container
