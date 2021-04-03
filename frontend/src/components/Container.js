import { connect } from 'react-redux'

import Card from './Card'
import TodoAdd from './TodoAdd'

const Container = ({ todos }) => (
	<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 place-items-center'>
		{todos &&
			todos.map(({ group, items }) => (
				<Card
					key={group.toLowerCase().split(/\s+/).join('-')}
					id={group.toLowerCase().split(/\s+/).join('-')}
					name={group}
					done={items.filter(e => e.state === 'done').length}
					later={items.filter(e => e.state === 'later').length}
					undone={items.filter(e => e.state === 'undone').length}
				/>
			))}
		<TodoAdd />
	</div>
)

const mapStateToProps = todos => todos

export default connect(mapStateToProps, null)(Container)
