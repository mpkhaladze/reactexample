import React from 'react'
import { Home} from './Home'
import {About} from './About'
import {Topics} from './Topics'
import Login from './auth/Login'
import { PrivateRoute } from './private/PrivateRoute'
import { AuthButton } from './private/PrivateRoute'
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom'

//import { Button } from 'react-bootstrap';
export const Header = () => (
	<Router>
	    <div>
		    <nav className='navbar navbar-expand-sm navbar-dark' 
		    	style={{backgroundColor: "coral"}}>
				<ul className='navbar-nav'>
					<li className="nav-item">
						<Link className='nav-link' to="/">Home</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to="/about">About</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to="/topics">Topics</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to="/protected">protected</Link>
					</li>
				</ul>
			</nav>
			<AuthButton/>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/login" component={Login}/>
			<PrivateRoute path="/topics" component={Topics}/>
			<PrivateRoute path="/protected" component={Protected}/>
		</div>
	</Router>
)

const Protected = () => <h3>Protected</h3>