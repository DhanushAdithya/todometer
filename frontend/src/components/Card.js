import { FaClock, FaTimes, FaCheck, FaPlus } from 'react-icons/fa'

import '../styles/Card.scss'

const Card = ({ name, done, later, undone }) => (
	<div className='card grid grid-rows-3 py-2 pt-0'>
		<div className='pl-4 flex items-center mb-2'>
			<div className='w-4 h-4 bg-red-400 rounded-full cursor-pointer hover:bg-red-500 transition'></div>
			<h1 className='text-2xl font-bold text-gray-300 ml-3'>{name}</h1>
		</div>
		<div className='grid grid-cols-3 p-3 pt-0 gap-x-3'>
			<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
				<FaCheck className='text-2xl text-green-400' />
				<div className='text-gray-300 font-bold text-xl'>{done}</div>
			</div>
			<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
				<FaClock className='text-2xl text-yellow-400' />
				<div className='text-gray-300 font-bold text-xl'>{later}</div>
			</div>
			<div className='flex rounded-full justify-around items-center p-1 bg-gray-500 shadow-sm hover:shadow-lg'>
				<FaTimes className='text-2xl text-red-400' />
				<div className='text-gray-300 font-bold text-xl'>{undone}</div>
			</div>
		</div>
		<div className='grid grid-cols-1 h-16 pb-3 place-items-center'>
			<div className='grid place-items-center h-12 w-12 rounded-full cursor-pointer border-blue-300 border-2 text-blue-300 transition hover:bg-blue-300 hover:text-gray-600'>
				<FaPlus className='text-xl' />
			</div>
		</div>
	</div>
)

export default Card
