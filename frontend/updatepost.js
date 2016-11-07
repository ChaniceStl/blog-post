import React from 'react';

var UpdatePost = React.createClass({
	getInitialState:function (){
		return({input: })
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

  onClick () {
      
  },

	render(){


			return(
				<ul>
					{post}
				</ul>
				)
	}
})
