import React from 'react'
import { Form, Input, Button, Spin, Space } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import { NavLink } from 'react-router-dom';



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


const Demo = (props) => {
    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }
    const onFinish = (values) => {
        props.onAuth(values.username, values.password);
        props.history.push('/success');

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            {errorMessage}
            {
                props.loading ?

                    <Spin />

                    :
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}

                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <input className="btn-hover color-1" type="submit" value="Login" />
                            <br />

                            <NavLink
                                style={{ marginLeft: '5px' }}
                                to='/signup/'>   Or signup
                    </NavLink>
                        </Form.Item>
                    </Form>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);