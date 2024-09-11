import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';
import RegisterBook from './pages/RegisterBook';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<RegisterBook />} />
			</Routes>
		</Router>
	);
}

export default App
