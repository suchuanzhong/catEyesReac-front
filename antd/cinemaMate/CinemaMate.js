import React from "react";
import {ajax} from "../../common/tools";
import {Card,Row,Col} from 'antd';
import MateTable from './MateTable';


export default class CinemaMate extends React.Component{
    constructor(props){
        super(props);
        this.state={
        	moviesData:{}
        }

    }
    componentWillMount(){
        this.show();
    }
    show(page){
    	ajax({
    		type:'post',
    		url:"/movies/find",
    		data:{
    			page:page,
    			rows:5
    			
    		},
    		success:function(data){
    			this.setState({
    				moviesData:data
    			})
    			console.log(this.state.moviesData)
    		}.bind(this)
    	})
    }

    render(){
		return <div style={{marginLeft:"20px",backgroundColor:"white"}}>

		<h1>电影院线匹配管理</h1>
		
    		<MateTable moviesData={this.state.moviesData}></ MateTable>
			
		
		</div>
	}
}
