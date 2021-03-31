import { Link } from 'wouter'
import { TiPlus } from 'react-icons/ti'

import '../styles/Card.scss'
import '../styles/TodoAdd.scss'

const TodoAdd = () => (
	<Link href='/creategroup'>
		<div className='card flex justify-center items-center cursor-pointer'>
			<div className='icon-container'>
				<TiPlus className='icon' />
			</div>
		</div>
	</Link>
)

export default TodoAdd
