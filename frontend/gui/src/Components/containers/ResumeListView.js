import React from 'react'
import Resumes from '../Resume'
import axios from 'axios'


class ResumeList extends React.Component {

    state = {
        resumes: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                this.setState({ resumes: res.data })
                console.log(res.data)
            })
    }
    render() {
        return (
            <Resumes data={this.state.resumes} />
        );
    }
}

export default ResumeList;