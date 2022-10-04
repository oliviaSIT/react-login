import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.js';
import LoginPage from './components/Login/LoginPage';


class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/LoginPage">Login</Link>
			</li>
			{/* <li>
				<Link to="/Algorithm">Algorithm</Link>
			</li> */}
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/LoginPage' element={< LoginPage />}></Route>
				{/* <Route exact path='/Algorithm' element={< Algorithm />}></Route> */}
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
