import React from "react";

export default class Input extends React.Component{
	//初始化state和change函数是为了改变受控组件，让input框的值可以改变
	constructor(props){
//		console.log(this.props);		//4个文本框
		super(props);
		this.state = {
			value:this.props.value
		}
	}
	//componentWillReceiveProps在props改变时才会触发，newProps就是点击后的那个学生对象
	componentWillReceiveProps(newProps){
//		console.log(newProps);
		if(this.props.value != newProps.value){
			this.setState({
				value: newProps.value			//newProps.value就是对应的名字和年龄
			});
		}
	}
	change(even){
		this.setState({
			value: even.target.value
		});
	}
	render(){
		//input框加了value并且有值，就变成了受控组件
		return <div>
			<label>{this.props.children}</label>
			<input ref="input" onChange={this.change.bind(this)} onBlur={this.props.validate} type={this.props.type} value={this.state.value || ""}/>
			<span style={this.props.style}>{this.props.info}</span>
		</div>
	}
}