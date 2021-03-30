import { Route } from 'wouter'

import { Container, Navbar } from './components'
import { CreateGroup } from './pages'

const App = () => (
	<div>
		<Navbar />
		<Route path='/'>
			<Container />
		</Route>
		<Route path='/creategroup'>
			<CreateGroup />
		</Route>
	</div>
)

export default App
