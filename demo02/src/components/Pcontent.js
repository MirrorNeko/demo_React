import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const axios = require('axios');

class Pcontent extends Component{
	constructor(props){
		super(props);

		this.state={
			list:[],
			domain:'http://a.itying.com/'
		}
	}
	requestData(id){
		var api=this.state.domain+'api/productcontent?id='+id;
		axios.get(api)
		.then((response)=>{
			//handle success
			//console.log(response);
			this.setState({
				list:response.data.result[0]
			})
		})
		.catch((error)=> {
		    // handle error
		    console.log(error);
		  });
	}
	componentDidMount(){
		//id
		//console.log(this.props.match.params.id);
		let id=this.props.match.params.id;
		this.requestData(id);
	}
	render(){
		return(
			<div className='pcontent'>
				<div className='back'>
					<Link to='/'>返回</Link>
				</div>
				<div className='p_content'>
					<div className='p_info'>
						<img src={`${this.state.domain}${this.state.list.img_url}`}/>
						<h2>{this.state.list.title}</h2>
						<p className='price'>{this.state.list.price}</p>
					</div> 
					<div className='p_detail'>
						<h3>商品详情</h3>
						<div className='p_content' dangerouslySetInnerHTML={{__html:this.state.list.content}}></div>
						
					</div>
				</div>





			</div>
		)
	}
}

export default Pcontent;