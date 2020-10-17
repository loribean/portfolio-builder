import React from 'react'
import { Route } from 'react-router-dom'
import ResumeList from './Components/containers/ResumeListView'
import ResumeDetail from './Components/containers/ResumeDetailView'
import Editor from './Components/Create'
import Success from './Components/Success'
import Login from './Components/containers/Login'
import Signup from './Components/containers/Signup'



const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ResumeList} />
            <Route exact path='/create' component={Editor} />
            <Route exact path='/edit/:resumeID' component={ResumeDetail} />
            <Route exact path='/api/create/' component={Success} />
            <Route exact path='/login/' component={Login} />
            <Route exact path='/signup/' component={Signup} />



        </div>
    )
}
export default BaseRouter