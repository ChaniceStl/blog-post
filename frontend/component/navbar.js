import React from "react"
import {Link} from "react-router"

const NavBar = React.createClass({
	render(){
		return(
			<nav className="navbar navbar-default navbar-static-top">
				<div>
					<Link to="/">Create New Post</Link> <span/>
					<Link to ="/post">View Post</Link> <span/>
					<Link to="/deletepost">Delete Post</Link> <span/>
					<Link to="/updatepost">Update Post</Link> <span/>
				</div>
			</nav>
			)
	}
})

export default NavBar;
