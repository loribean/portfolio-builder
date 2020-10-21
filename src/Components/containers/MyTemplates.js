import React from 'react'
import Resumes from '../Resume'
import axios from 'axios'
import { connect } from "react-redux"


class MyTemplates extends React.Component {

    state = {
        mytemplates: [],
        userid: parseInt(localStorage.getItem('userdata'))
    }

    componentDidMount() {
        fetch(`/api/`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                let filteredres = res.filter(item =>
                    item.user === this.state.userid
                )
                return filteredres
            })
            .then(result => {
                console.log(result)
                this.setState({ mytemplates: result })
            })

    }
    render() {
        return (
            <>
                <Resumes data={this.state.mytemplates} />
            </>
        );
    }
}





export default MyTemplates

