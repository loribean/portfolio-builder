import React from 'react'
import axios from 'axios'
import { Card } from "antd";
import EditExisting from '../EditExisting';



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
            <>
                <Card title={this.state.resume.title}>
                </Card>
                <EditExisting content={this.state.resume.content} title={this.state.resume.title} id={this.props.match.params.resumeID} />
            </>

        );
    }
}

export default ResumeDetail;