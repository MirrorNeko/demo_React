import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import axios from 'axios';
const axios = require('axios');
class Home extends Component{
	constructor(props){
		super(props);

		this.state={
			list:[],
			domain:'http://a.itying.com/'
		}
	}
	requestData=()=>{
		//箭头函数，改变this指向
		var api='http://a.itying.com/api/productlist';
		axios.get(api)
		.then((response)=>{
			//handle success
			//console.log(response);
			this.setState({
				list:response.data.result
			})
		})
		.catch((error)=> {
		    // handle error
		    console.log(error);
		  });
	}
	componentDidMount(){
		this.requestData();
	}
	render(){
		return(
			<div className='home'>
				首页组件
				<div className='list'>
				{
					this.state.list.map((value,key)=>{
						return(
							<div className='item' key={key}>
								<h3 className='item_cate'>{value.title}</h3>
								<ul className='item_list'>
								{
									value.list.map((v,k)=>{
										return(
											<li key={k}>
												<Link to={`/pcontent/${v._id}`}>
												<div className='inner'>
													<img src={`${this.state.domain}${v.img_url}`} />
													<p className="title">{v.title}</p>						
													<p className="price">{v.price}</p>
												</div>
												</Link>
											</li>
										)
									})
								}
								</ul>
							</div>
						)
					})
				}				
				</div>
			</div>
		)
	}
}

export default Home;