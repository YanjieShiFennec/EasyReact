import './index.scss'
import {Card, Form, Input, Button} from 'antd'
import logo from '@/assets/logo.png'
import {useDispatch} from "react-redux";
import {fetchLogin} from "@/store/modules/user";

const Login = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log(values);
        // 触发异步 action fetchLogin
        dispatch(fetchLogin(values));
    };

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                {/* 登录表单 */}
                <Form onFinish={onFinish} validateTrigger="onBlur">
                    <Form.Item
                        name="mobile"
                        initialValue="13800000002"
                        // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
                        rules={[
                            {
                                required: true,
                                message: "请输入手机号"
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: "请输入正确的手机号格式"
                            }
                        ]}>
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        initialValue="246810"
                        rules={[
                            {
                                required: true,
                                message: "请输入验证码"
                            }
                        ]}>
                        <Input size="large" placeholder="请输入验证码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login