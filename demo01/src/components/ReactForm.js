import React, {Component} from 'react';

class ReactForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			msg:"react表单",
            name:'',  
            sex:'1',     
            city:'',      
            citys:[ 
                '北京','上海','深圳'            
            ],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:''   
		}
	}

	render(){
		return(
			<div>
				<form onSubmit = {this.handleSub.bind(this)}>
				  {/*姓名*/}
					姓名：<input type="text" value = {this.state.name} onChange = {this.handleName.bind(this)}/>
					{/*性别*/}
					<br />
					性别：<input type='radio' value='1' checked = {this.state.sex=='1'} onChange={this.handleSex.bind(this)}/>男
					<input type='radio' value='2' checked = {this.state.sex=='2'} onChange={this.handleSex.bind(this)}/>女
					<input type='submit' value='提交'/>
					{/*城市*/}
					<br />
					城市：<select value={this.state.city} onChange={this.handleCity.bind(this)}>
						{
							this.state.citys.map(function(value,key){
							return(
									<option key={key}>{value}</option>
								)
						})
					}
					</select>
				{/*爱好*/}
					<br />
					爱好：
					{
						this.state.hobby.map(function(value,key){
							return(
								<span key={key}>
							<input type='checkbox' checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>{value.title}
							</span>
							)
						}.bind(this))
					}
				</form>

			</div>
		)
	}
	handleSub(e){
		e.preventDefault();//组织默认事件
		console.log(this.state.name,this.state.sex,this.state.city);
		this.state.hobby.map((value,key)=>{
			//console.log(value);
			if(value.checked){
				console.log(value.title);
			}
		})
	}
	handleName(e){
		//console.log(e.target.value);
		this.setState({
			name:e.target.value
		})
	}
	handleSex(e){
		this.setState({
			sex:e.target.value
		})
	}
	handleCity(e){
		console.log(e.target.value);
		this.setState({
			city:e.target.value
		})
	}
	handleHobby(key){
		//console.log(e.target.value);
		//console.log(key);
		var hobby=this.state.hobby;
		//console.log(hobby);
		hobby[key].checked = !hobby[key].checked;
		this.setState({
			hobby:hobby
		})
	}
}
export default ReactForm;