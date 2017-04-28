import React from "react";
import {ajax} from "../../common/tools";
import {Form,Icon,Input,Button,Checkbox,Col,Row,Card} from 'antd';
const FormItem = Form.Item;

class Login extends React.Component{
	//初始化state
	constructor(props){
		super(props);
	}
	login(){
		var values = this.props.form.getFieldsValue();
		ajax({
            type:'POST',
            url:'users/find',
            data:values,
            success:(data)=>{
            	if(data.length > 0){
					this.props.router.replace("/users");
				}
            }
		});
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		return (
			<Row type="flex" justify="center" style={{marginTop:"50px"}}>
				<Col span={8} style={{width:"350px"}}>
					<Card title="登录" style={{marginTop:"20px"}}>
						<Form className="login-form">
					        <FormItem>
					          {getFieldDecorator('username', {
					            rules: [{ required: true, message: '请输入用户名' }],
					          })(
					            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
					          )}
					        </FormItem>
					        <FormItem>
					          {getFieldDecorator('pwd', {
					            rules: [{ required: true, message: '请输入密码' }],
					          })(
					            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
					          )}
					        </FormItem>
					        <FormItem>
					          <Button type="primary" htmlType="button" style={{marginLeft:"120px"}} className="login-form-button"
					          onClick={this.login.bind(this)}>登录 </Button>
					        </FormItem>
					    </Form>
					</Card>
				</Col>
			</Row>
		);
	}
}
export default Form.create()(Login);