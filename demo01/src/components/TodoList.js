import React, {Component} from 'react';
import '../assets/css/TodoList.css';
import Storage from '../model/storage';
class TodoList extends Component{
	constructor(props){
		super(props);

		this.state={
			inputValue:'',
			list:[],
			comList:[]
		}
	}
	//生命周期函数
	componentDidMount(){
		//获取缓存的数据
		var list=JSON.parse(localStorage.getItem('list'));
		var comList=JSON.parse(localStorage.getItem('comlist'));
		if(list){
			this.setState({
				list:list,
				comList:comList
			})
		}
	}
	render(){
		return(
			<div>
				TodoList;
				<input type='text' value={this.inputValue} onChange={this.inputItem.bind(this)}/>
				<button onClick={this.handleInput.bind(this)}>+++</button>
				<br />
				<h3>待办事项</h3>
				<ul className='itemList'>
					{
						this.state.list.map((value,key) =>{
							return(
							<li key={key}><button onClick={this.comItem.bind(this,key)}>已完成</button>{value}<button onClick={this.deleteItem.bind(this,key)}>delete</button></li>
							)
						})
					}
				</ul>
				<br />
				<span>______________________________________</span>
				<h3>已完成事项</h3>
				<ul className='comList'>
					{
						this.state.comList.map((value,key) =>{
							return(
								<li key={key}>{value}<button onClick={this.unComItem.bind(this,key)}>未完成</button></li>
							)
						})
					}
				</ul>
			</div>
		)
	}
	inputItem(e){
		this.setState({
			inputValue: e.target.value
		})
	}
	handleInput(){
		//alert(this.state.inputValue);
		var list=this.state.list;
		list.push(this.state.inputValue);
		this.setState({
			inputValue:'',
			list:list
		})
	}
	deleteItem(key){
		//alert(key);
		var list = this.state.list;
		list.splice(key, 1);
		this.setState({
			list:list
		})
	}
	comItem(key){
		var comList=this.state.comList;
		var list=this.state.list;
		comList.push(list[key]);
		list.splice(key,1);
		this.setState({
			list:list,
			comList:comList
		})
		//localStorage.setItem('list',JSON.stringify(list));
		Storage.set('list',list);
		localStorage.setItem('comlist',JSON.stringify(comList));
	}
	unComItem(key){
		var comList=this.state.comList;
		var list=this.state.list;
		list.push(comList[key]);
		comList.splice(key,1);
		this.setState({
			list:list,
			comList:comList
		})
		localStorage.setItem('list',JSON.stringify(list));
		localStorage.setItem('comlist',JSON.stringify(comList));
	}
}
export default TodoList;