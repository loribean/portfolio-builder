import React from 'react'
import Resumes from '../Resume'
import axios from 'axios'
import { connect } from "react-redux"


class ResumeList extends React.Component {

    state = {
        resumes: []
    }

    componentDidMount() {

        fetch(`/api/`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                let response = res.json()
                return response
            })
            .then(response => {
                console.log(response)
                this.setState({ resumes: response.data })
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

