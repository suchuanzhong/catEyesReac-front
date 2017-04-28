import React from "react";
import {Link} from "react-router";
import {Layout,Menu,Icon} from 'antd';
const {Content,Sider} = Layout;

export default class Manage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div >
			<Layout style={{padding:5}}>
				<Sider style={{overflow:"auto",height:"450px",background:"#92ccfe"}}>
					<Menu mode="inline" defaultSelectedKeys={['4']}>
			  			<Menu.Item key="users" style={{background:"#92ccfe"}}>
			  				<Icon type="user"/>
			  				<span className="nav-text"><Link to="users">用户管理</Link></span>
			  			</Menu.Item>
			  			<Menu.Item key="movies" style={{background:"#92ccfe"}}>
			  				<Icon type="solution"/>
			  				<span className="nav-text"><Link to="movies">电影管理</Link></span>
			  			</Menu.Item>
			  			<Menu.Item key="cinemaLine" style={{background:"#92ccfe"}}>
			  				<Icon type="upload"/>
			  				<span className="nav-text"><Link to="cinemaLine">院线管理</Link></span>
			  			</Menu.Item>
			  			<Menu.Item key="cinemaMate" style={{background:"#92ccfe"}}>
			  				<Icon type="upload"/>
			  				<span className="nav-text"><Link to="cinemaMate">电影院线匹配管理</Link></span>
			  			</Menu.Item>
			  			<Menu.Item key="hotMovie" style={{background:"#92ccfe"}}>
			  				<Icon type="solution"/>
			  				<span className="nav-text"><Link to="hotMovie">热映电影管理</Link></span>
			  			</Menu.Item>
			  			<Menu.Item key="upMovie" style={{background:"#92ccfe"}}>
			  				<Icon type="solution"/>
			  				<span className="nav-text"><Link to="upMovie">待映电影管理</Link></span>
			  			</Menu.Item>
			  		</Menu>
				</Sider>
				
				<Content>{this.props.children}</Content>
			</Layout>
		</div>
	}
}