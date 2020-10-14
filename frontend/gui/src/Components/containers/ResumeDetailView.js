import React from 'react'
import axios from 'axios'
import { Card } from "antd";



class ResumeDetail extends React.Component {

    state = {
        resume: {}
    }

    componentDidMount() {
        const resumeID = this.props.match.params.resumeID
        axios.get(`/api/${resumeID}`)
            .then(res => {
                this.setState({ resume: res.data })
            })
    }
    render() {
        return (
            <Card title={this.state.resume.title}>
                <p>{this.state.resume.content}</p>

            </Card>

        );
    }
}

export default ResumeDetail;