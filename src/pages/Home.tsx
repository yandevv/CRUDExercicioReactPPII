import { Link } from 'react-router-dom';

import '../styles/Home.css';

import LastBooks from '../components/LastBooks'

function Home() {
	return (
		<div>
			<h1>Welcome to the Book Store!</h1>
			<div className="operationsDiv">
				<div className="buttonsDiv">
					<button >View Books</button>
					<Link to="/register">
						<button>Register a Book</button>
					</Link>
				</div>
				<LastBooks />
			</div>
		</div>
	)
}

export default Home