import React from 'react'
import Resumes from '../Resume'
import axios from 'axios'
import { connect } from "react-redux"


class ResumeList extends React.Component {

    state = {
        resumes: []
    }

    componentDidMount() {

        axios.defaults.headers = {
            'Content-Type': 'application/json',
        }

        axios.get(`http://localhost:8000/api/`)
            .then(res => {
                this.setState({ resumes: res.data })
            })

    }
    render() {
        return (
            <>
                <Resumes data={this.state.resumes} />
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps, null)(ResumeList);

