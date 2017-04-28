import React from "react";
import {ajax} from "../../common/tools";
import {Card,Row,Col,Table,Button} from 'antd';


export default class MateTable extends React.Component{
	 constructor(props){
        super(props);
    }
    render(){
    	const columns = [{
					  title: '电影名',
					  dataIndex: 'movieCname',
					  key: 'movieCname',
						}, {
					  title: '英文名',
					  dataIndex: 'movieEname',
					  key: 'movieEname',
						}, {
					  title: '电影类型',
					  dataIndex: 'movieType',
					  key: 'movieType',
						}, {
					  title: '区域',
					  dataIndex: 'movieAddress',
					  key: 'movieAddress',
						}, {
					  title: '上映时间',
					  dataIndex: 'movieAge',
					  key: 'movieAge',
						}, {
					  title: '时长',
					  dataIndex: 'movieTime',
					  key: 'movieTime',
						}, {
					  title: '首映时间',
					  dataIndex: 'movieShowTime',
					  key: 'movieShowTime',
						}, {
					  title: '首映区域',
					  dataIndex: 'movieShowAdd',
					  key: 'movieShowAdd',
						}, {
					  title: '票房',
					  dataIndex: 'movieMoney',
					  key: 'movieMoney',
						}, {
					  title: '操作',
					  dataIndex: 'action',
					  key: 'action',
					  render: (text, record) => (
					    <span>
					      
					      <Button>增加院线</Button>	
					      <Button>删除</Button>	
					    </span>
					  ),
				}];
		return <div >
			<Card>
			<Table columns={columns}
			  
			expandedRowRender={record => <p>kan</p>} 

			dataSource={this.props.moviesData.rows} />
			</Card>
		</div>
	}
}
