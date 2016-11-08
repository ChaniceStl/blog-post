import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Router ,browserHistory, IndexRoute, Route, Link} from "react-router";
import GetPost from "./component/getpost.js"
import DeletePost from "./component/deletepost.js"
import UpdatePost from "./component/updatepost.js"
import NavBar from "./component/navbar.js"
import PostAuthor from "./component/authors/postauthor.js"


var PostForm = React.createClass({
    getInitialState: function() {
        return { input: "" , data: ""}
    },
    handleChange: function(e) {
        this.setState({ input: e.target.value });
    },
    makeNewPost: function(e) {
        e.preventDefault();
        let body = this.state.input;
        $.ajax({
            url: '/api/post',
            type: 'POST',
            data: { post: body }
        });
    },
    changeParentState(data){
    	this.setState({data: data})
    },
    render: function() {
    	const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       changeParentState: this.changeParentState,
       data: this.state.data
     })
    );
        return (
        	<div>
            <NavBar/><br/>
            <form onSubmit={ this.makeNewPost }>
	            <input type="text"
                placeholder="body"
                value={this.state.input}
                onChange={this.handleChange}>
	            </input>
	            <input type = "submit" value="submit"></input>
            </form>
            {childrenWithProps}
          </div>
        )
    }
});

render(
 <Router history={browserHistory}>
   <Route path="/" component={PostForm}>
     <Route path="/post" component={GetPost}/>
     <Route path="/deletepost" component={DeletePost}/>
     <Route path="/updatepost" component={UpdatePost}/>
   </Route>

   <Route path="/author" component={PostAuthor}>
   </Route>
 </Router>
   ,document.getElementById('root')
);
