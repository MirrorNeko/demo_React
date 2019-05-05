import React, {Component} from 'react';
//父子组件传值
import Header from './Header';

class Home extends Component{
	constructor(props){
		super(props);

		//定义数据
		this.state={
			title:'首页', 
			name: 'Kun',
			username:""
		}
	}
	run(e){
		//alert(this.state.name);
		//alert(e.target);//获取执行事件的dom节点
		//e.target.style.background = 'pink';
		alert(e.target.getAttribute('aid'));
	}
	render(){
		return(
			<div>
				<Header title={this.state.title}/>
				<p>Name is {this.state.name}</p>

				<h2>事件对象演示</h2>
				<button 
					aid="123"
					onClick = {this.run.bind(this)}>事件对象</button>
				<h2>表单事件</h2>

			{/*获取表单的值
			  1、监听表单的改变事件
			  2、在改变的事件里面获取表单输入的值
			  3、把表单输入的值赋值给username
			  4、点击按钮的时候获取state里面的username				
			*/}
				<input onChange={this.inputChange.bind(this)}/>
				<button onClick = {this.getInput.bind(this)}>获取input框的值</button>
			</div>
		)
	}
	inputChange(e){
		//console.log(e.target.value);
		this.setState({
			username:e.target.value
		})
	}
	getInput(){
		alert(this.state.username);
	}
}
export default Home;