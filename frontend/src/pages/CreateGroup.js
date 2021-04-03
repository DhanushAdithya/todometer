import { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'wouter'
import { addGroup } from '../store/actions/actionCreators'

const CreateGroup = ({ addGroup }) => {
	const [group, setGroup] = useState('')
	const [redirect, setRedirect] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		group && addGroup(group)
		setGroup('')
		setRedirect(true)
	}

	return redirect ? (
		<Redirect href='/' />
	) : (
		<div className='lg:w-1/2 lg:px-0 md:container mx-auto'>
			<form
				className='flex justify-center items-center mt-10'
				onSubmit={handleSubmit}
			>
				<div className='flex justify-center items-center flex-col w-4/5 bg-gray-600 p-5 rounded-lg'>
					<div className='flex flex-col items-start w-full'>
						<label className='float-left text-lg text-gray-400 font-semibold bg-gray-800 px-3 rounded-t-md'>
							Group Name:
						</label>
						<input
							className='w-full bg-gray-800 outline-none px-4 py-2 pb-3 text-gray-400 text-xl rounded-r-md rounded-b-md'
							placeholder=''
							type='text'
							value={group}
							onChange={e => setGroup(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='float-right px-5 py-2 border-gray-400 text-gray-400 border-2 rounded-full text-xl font-semibold hover:bg-gray-400 transition hover:text-gray-700 mt-5'
					>
						Create Group
					</button>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addGroup: name => dispatch(addGroup(name)),
})

export default connect(null, mapDispatchToProps)(CreateGroup)
