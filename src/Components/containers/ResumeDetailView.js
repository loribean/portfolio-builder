import React from 'react'
import axios from 'axios'
import { Card } from "antd";
import EditExisting from '../EditExisting';
import { connect } from "react-redux";
import CommentContainer from './CommentContainer';
import { Spin } from 'antd';




class ResumeDetail extends React.Component {

    state = {
    }
    componentDidMount() {


        const resumeID = this.props.match.params.resumeID
        fetch(`/api/${resumeID}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: this.props.token
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ resume: res })
            })


    }


    render() {

        return (
            <>
                { this.state.resume ?
                    <>
                        <Card title={this.state.resume.title}>
                        </Card>
                        <EditExisting content={this.state.resume.content} title={this.state.resume.title} id={this.props.match.params.resumeID} user={this.state.resume.user} />
                        <p>Comments:</p>
                        <CommentContainer id={this.props.match.params.resumeID} />
                    </>

                    :
                    <Spin />
                }
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


