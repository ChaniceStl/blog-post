import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var Posts = React.createClass({
	getInitialState:function (){
		return({data: "", inputBox: false})
	},
	componentDidMount: function (){
		var that = this;
		console.log("hello");
		$.ajax({
			url:"/api/post",
			type: "GET",
			success: function(data){
				console.log(data);
			that.setState({data:data});
			}
		})
	},


	render() {
			let post = this.state.data ? this.state.data.map((post,idx,_id)=> {
				return (<div key={idx}>
									<li key={idx} className={post._id}>{post.title}</li>
									<button key={idx + 1} className={post._id} onClick={this.updatePost}>Update</button>
								</div>
							)
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

var AuthorForm = React.createClass({
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
