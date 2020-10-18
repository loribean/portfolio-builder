import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from "react-router-dom";
import * as actions from '../../store/actions/auth';
import Cookies from 'js-cookie'


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {

    render() {
        return (
            <Layout className="layout" >
                <Header>
                    <div className="logo" />


                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {
                            this.props.isAuthenticated ?
                                <Menu.Item key="2" onClick={this.props.logout}>
                                    Logout</Menu.Item>
                                :
                                <Menu.Item key="2">
                                    <Link to="/login">Login</Link></Menu.Item>

                        }
                        <Menu.Item key="1">
                            <Link to="/">Resumes</Link></Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/mytemplates/">My Templates</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/create">Create New Template</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout >

        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(actions.logout()),
        getid: (token) => dispatch(actions.getid(token))
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));