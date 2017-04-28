import React from "react";
import {ajax} from "../../common/tools";
import {Card,Row,Col} from 'antd';

export default class HotMovie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
		return <div style={{width:"800px",marginLeft:"200px"}}>
		    <p>热映电影管理</p>
		</div>
	}
}
