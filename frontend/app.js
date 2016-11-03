import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var Posts = React.createClass({
	getInitialState:function (){
		return({data: ""})
	},
	componentDidMount: function (){
		var that = this;
		console.log("hello");
		$.ajax({
			url:"/api/post",
			success: function(data){
				console.log(data);
			that.setState({data:data});
			}
		})
	},
	render(){
			let post = this.state.data ? this.state.data.map((post,idx)=> {
				return <li key={idx}>{post.title}</li>
			}) : null

			return(
				<ul>
					{post}
				</ul>
				)
	}
});


var NewPostForm = React.createClass({
	getInitialState: function () {
		return {input: ""}
	},
	handleChange: function (e) {
		this.setState({input: e.target.value});
	},
	makeNewPost: function (e) {
		e.preventDefault();
		let body = this.state.input;
		$.ajax({
			url: '/api/post',
			type: 'POST',
			data: {post: body}
		});
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.makeNewPost}>
					<input type="text" placeholder="body" 
					value={this.state.input} 
					onChange={this.handleChange}></input>
					<input type="submit"></input>
				</form>
				
				<Posts />

			</div>
		)
	}
});

render(
  <NewPostForm/>,
  document.getElementById('root')
);

