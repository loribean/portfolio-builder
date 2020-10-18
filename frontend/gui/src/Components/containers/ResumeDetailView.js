import React from 'react'
import axios from 'axios'
import { Card } from "antd";
import EditExisting from '../EditExisting';
import { connect } from "react-redux";



class ResumeDetail extends React.Component {

    state = {
        resume: {}
    }
    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: this.props.token
            }
            const resumeID = this.props.match.params.resumeID
            axios.get(`http://localhost:8000/api/${resumeID}`)
                .then(res => {
                    this.setState({ resume: res.data })
                })
        }

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

const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps, null)(ResumeDetail);


