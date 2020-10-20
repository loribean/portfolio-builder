import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';

import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import 'antd/dist/antd.css';
import CustomLayout from './Components/containers/Layout'
import { connect } from "react-redux";
import * as actions from './store/actions/auth'





class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (

      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
