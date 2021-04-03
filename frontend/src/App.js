import { Route } from 'wouter'

import { Container, Navbar } from './components'
import { CreateGroup } from './pages'
import Todos from './pages/Todos'

const App = () => (
	<div>
		<Navbar />
		<Route path='/'>
			<Container />
		</Route>
		<Route path='/creategroup'>
			<CreateGroup />
		</Route>
		<Route path='/todo/:id'>{({ id }) => <Todos id={id} />}</Route>
	</div>
)

export default App
