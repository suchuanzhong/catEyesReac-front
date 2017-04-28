import React from "react";
import {Link} from "react-router";
import {Layout,Row,Col,Menu} from 'antd';
const {Header,Footer,Content} = Layout;

export default class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			current:{}
		}
	}
	handleClick(e){
	    this.setState({
	      current: e.key,
	    });
  	}
	render(){
		return <div >
			<Layout>
			  <Header style={{background:"#33ffff"}}>
			  	<Row>
			  		<Col span={4}><h1>电影管理系统</h1></Col>
			  		<Col offset={20}>
				  		<Menu style={{marginTop:"18px",background:"#33ffff"}} onClick={this.handleClick.bind(this)}
				  			selectedKeys={[this.state.current]} mode="horizontal">
				  			<Menu.Item key="login">
				  				<Link to="login">登录</Link>
				  			</Menu.Item>
				  		</Menu>
			  		</Col>
			  	</Row>
			  </Header>
			  
			  <Content style={{minHeight:"460px"}}>{this.props.children}</Content>
			  
			  <Footer style={{height:"100px",background:"#33ffff",textAlign:"center"}}>
			  	<h1>开发人员:陈宇 苏传忠 唐军 付礼成 蒋旭</h1>
			  </Footer>
			</Layout>
		</div>
	}
}