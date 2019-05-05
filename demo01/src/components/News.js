import React, {Component} from 'react';

class News extends Component{
	constructor(props){
		super(props);  /*用于父子组件传值*/

	}
	render(){
		return(
			<div>
				<ul>
					<li>KUN</li>
					<li>KUN</li>
					<li>KUN</li>
					<li>KUN</li>
				</ul>
			</div>
		)
	}
}
export default News;