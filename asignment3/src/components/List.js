import React,{Component} from 'react';
 class List extends Component
 {
 	render()
 	{
 		const {finals,deleteStudent}=this.props;
 	const list=finals.map(final=>
 	{
 		return (final.age>12)?
 		(
 				<div>
 				<p>{final.name}</p>
 				<p>{final.age}</p>
 				<p>{final.school}</p>
 				<button onClick={()=>{deleteStudent(final.name)}}>DELETE</button>
 				</div>)
 	 :"data is not sh"
 	})
 

 		return(
 			<div>
 			{list}
 			</div>
 			)
 	}
 }
 export default List;