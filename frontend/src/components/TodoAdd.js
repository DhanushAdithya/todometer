import { TiPlus } from 'react-icons/ti'

import '../styles/Card.scss'
import '../styles/TodoAdd.scss'

const TodoAdd = () => (
	<div className='card flex justify-center items-center'>
		<div className='icon-container'>
			<TiPlus className='icon' />
		</div>
	</div>
)

export default TodoAdd
