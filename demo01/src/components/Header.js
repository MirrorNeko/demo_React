//父子组件传值--->App.js
import React, {Component} from 'react';

class Header extends Component{
	constructor(props){
		super(props);

		this.state ={
 			msg: '头部组件'
		}
	}
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}
export default Header;