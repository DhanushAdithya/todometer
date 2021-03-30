import { Link } from 'wouter'
import '../styles/Navbar.scss'

const Navbar = () => (
	<div>
		<nav>
			<Link href='/'>
				<h1>Todometer</h1>
			</Link>
		</nav>
	</div>
)

export default Navbar
