import React, {Component} from 'react';

class List extends Component{
	constructor(props){
		super(props);

		this.state = {
			username: ""
		}
	}

	render(){
		return(
			<div>
			{/*获取表单的值
              1、监听表单的改变事件
              2、在改变的事件里面通过ref获取表单输入的值
              3、把表单输入的值赋值给username
              4、点击按钮的时候获取state里面的username                
            */}
            	<input ref='username' onChange={this.inputChange.bind(this)}/>
				<button onClick = {this.getInput.bind(this)}>获取input框的值</button>
			
				<p>键盘事件,按回车时弹出表单值</p>

				<input onKeyUp={this.keyUp.bind(this)}/>
			</div>

		)
	}
	inputChange(){

		/*获取dom节点：
			1、给元素定义ref属性
			<input ref = "username" />
			2、通过this.refs.username获取dom节点
		*/
		let val = this.refs.username.value;

		this.setState({
			username:val
		})
	}
	getInput(){
		alert(this.state.username);
	}
	keyUp(e){
		//console.log(e.keyCode);
		if(e.keyCode == 13){
			alert(e.target.value);
		}
	}
}
export default List;