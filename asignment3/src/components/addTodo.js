import React,{Component} from 'react';
import './style.css';
 class AddTodo extends Component{
 	state={
 		id:null,
 		name:null
 	}
 	handleChange=(e)=>
 	{
 		this.setState({
 			[e.target.id]:e.target.value
 		})
 	}
 	handleSubmit=(e)=>
 	{
 		e.preventDefault();
 		this.props.add(this.state)
 	}

 	render()
 	{

 		return(
 			<div className="adding">
 			<form onSubmit={this.handleSubmit}>
 			<label>Order No:</label>
 			<input type="number" id="id" onChange={this.handleChange}/>
 			<label>Task:</label>
 			<input type="text" id="name" onChange={this.handleChange}/>
 			<br/>
 			<button className="bttn">Submit</button>
 			</form>
 			</div>)
 	}
 }
 export default AddTodo