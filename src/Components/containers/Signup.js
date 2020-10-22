import React from 'react';
import {
    Form,
    Input,
} from 'antd';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import { NavLink } from 'react-router-dom';






const RegistrationForm = (props) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        props.onAuth(values.username, values.email, values.password, values.confirm)
        props.history.push('/');
    };


    return (
        <Form

            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
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
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item >
                <input className="btn-hover color-1" type="submit" value="Register" />
                <br />

                <NavLink
                    style={{ marginLeft: '5px' }}
                    to='/signup/'>   Or signup
                    </NavLink>
            </Form.Item>
        </Form>
    );
};

function mapStateToProps(state) {
    return {
        loading: state.loading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.signup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
