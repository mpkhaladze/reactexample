import React from 'react'
import { Home} from './Home'
import {About} from './About'
import {Topics} from './Topics'
import Login from './auth/Login'
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Redirect,
  withRouter
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
				</ul>
			</nav>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/login" component={Login}/>
			<Route path="/topics" component={Topics}/>
		</div>
	</Router>
)