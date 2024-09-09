import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/insertBook" element={} />
				<Route path="/edit/:id" element={} /> */}
			</Routes>
		</Router>
	);
}

export default App
