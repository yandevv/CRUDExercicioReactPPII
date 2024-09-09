import '../styles/Home.css';

import LastBooks from '../components/LastBooks'

function Home() {
	return (
		<div>
			<h1>Welcome to the Book Store!</h1>
			<div className="operationsDiv">
				<div className="buttonsDiv">
					<button>Register a book</button>
					<button>Edit a book</button>
				</div>
				<LastBooks />
			</div>
		</div>
	)
}

export default Home