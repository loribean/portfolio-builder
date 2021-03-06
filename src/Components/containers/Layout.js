import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from "react-router-dom";
import * as actions from '../../store/actions/auth';



const { Header, Content } = Layout;

class CustomLayout extends React.Component {

    handleLogout = () => {
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <>

                {
                    this.props.isAuthenticated ?
                        <>
                            <Layout className="layout" >
                                <Header>
                                    <div className="logo" />
                                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                        <Menu.Item key="4">
                                            <Link style={{ paddingLeft: '50px' }} to="/">  <img src="https://jeffbredenkamp.neocities.org/geologo.png" alt="logo" class="logo" style={{ width: '32px' }} /></Link></Menu.Item>
                                        <Menu.Item key="2" onClick={this.handleLogout}>
                                            Logout</Menu.Item>
                                        <Menu.Item key="1">
                                            <Link to="/timeline">Timeline</Link></Menu.Item>
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

                            </Layout >
                        </>

                        :
                        <>
                            <Layout className="layout" >
                                <Header>
                                    <div className="logo" />
                                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                        <Menu.Item key="4">
                                            <Link style={{ paddingLeft: '50px' }} to="/">  <img src="https://jeffbredenkamp.neocities.org/geologo.png" alt="logo" class="logo" style={{ width: '32px' }} /></Link></Menu.Item>
                                        <Menu.Item key="2">
                                            <Link to="/login">Login</Link></Menu.Item>
                                        <Menu.Item key="3">
                                            <Link to="/signup/">Register</Link></Menu.Item>
                                    </Menu>
                                </Header >
                                <Content style={{ padding: '0 50px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item><Link to="/signup/">Register</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div className="site-layout-content">{this.props.children}</div>

                                </Content>
                            </Layout >
                        </>

                }
            </>




        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(actions.logout())
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