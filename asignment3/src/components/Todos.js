import React,{Component} from 'react';
import './style.css'
import TodoL from './TodoL';
import AddTodo from './addTodo'
class Todos extends Component{
	state={
		todos:[
		{id:1, name:'buy milk'},
		{
			id:2, name: 'buy rice'
		}]
	}
	add=(data)=>
	{
		let todos=[...this.state.todos,data]
		this.setState({
			todos:todos
		})
	}
	deleteTodo=(id)=>
	{
		let todos=this.state.todos.filter(todo=>
			 {
			 	return todo.id!== id
			})
		
		this.setState({
			todos:todos
		})
	}
	render()
	{
		return(
			<div >
			<TodoL todos={this.state.todos} deleteTodo={this.deleteTodo}/>
			<AddTodo add={this.add}/></div>
			)
	}
}
export default Todos;