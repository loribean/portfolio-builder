import React from 'react';
import Cookies from 'js-cookie'
import moment from 'moment';
import axios from 'axios'
import { connect } from 'react-redux'
import IndivComment from '../Comment';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';


const { TextArea } = Input;

class CommentContainer extends React.Component {

    state = {
        body: ""
    }
    handleClick = () => {
        let data = { resume: this.props.id, name: localStorage.getItem('username'), userid: localStorage.getItem('userdata'), body: this.state.body, "csrfmiddlewaretoken": Cookies.get('csrftoken') }
        console.log(data)
        fetch(`/api/comment/${this.props.id}/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                alert('Successfully posted your comment!')
                return response.json()


            })
            .then(res => {
                console.log(res)
                this.setState(prevState => ({ commentsList: [...prevState.commentsList, res] }))
                this.setState({ body: "" })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ body: e.target.value })
    }
    componentDidMount() {

        fetch(`/api/comment/${this.props.id}/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: this.props.token
            }
        })
            .then(res => {

                this.setState({ commentsList: res.data })
            })

    }

    render() {

        return (
            <>
                {
                    this.state.commentsList ? this.state.commentsList.map(item => {
                        return <IndivComment commentsData={item} />
                    }) : <p>no comments yet</p>
                }


                <TextArea rows={4} onChange={(e) => { this.handleChange(e) }} value={this.state.body} />
                <Button type="primary" onClick={() => { this.handleClick() }}>
                    Post Comment</Button>


            </>
        )

    };
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps, null)(CommentContainer);

