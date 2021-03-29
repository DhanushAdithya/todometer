import { FaClock, FaTimes, FaCheck } from 'react-icons/fa'

import '../styles/Card.scss'

const Card = ({ name }) => {
	return (
		<div className='card'>
			<h1 className='text-2xl font-bold text-gray-400 text-center py-2 pb-4'>
				{name}
			</h1>
			<div className='grid grid-cols-3 px-3 gap-x-3'>
				<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
					<FaCheck className='text-2xl text-green-400' />
					<div className='text-gray-300 font-bold text-xl'>6</div>
				</div>
				<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
					<FaClock className='text-2xl text-yellow-400' />
					<div className='text-gray-300 font-bold text-xl'>7</div>
				</div>
				<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
					<FaTimes className='text-2xl text-red-400' />
					<div className='text-gray-300 font-bold text-xl'>9</div>
				</div>
			</div>
		</div>
	)
}

export default Card
