import React,{Component} from 'react';
import './style.css';

class TodoL extends Component{
	render()
	{
		let {todos,deleteTodo}=this.props;
		let list=todos.map(todo=>
		{
			return(
				<div className="dp">
				<p>{todo.name}</p>
				<button className="btn" onClick={()=>{deleteTodo(todo.id)}}>Delete</button></div>)
			})
		
		return(
			<div >
			{list}
			</div>)
	}
}
export default TodoL;