import React from 'react'
import { Route } from 'react-router-dom'
import ResumeList from './Components/containers/ResumeListView'
import ResumeDetail from './Components/containers/ResumeDetailView'
import Edit from './Components/Edit'


const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ResumeList} />
            <Route exact path='/:resumeID' component={ResumeDetail} />
            <Route exact path='/create' component={Edit} />

        </div>
    )
}
export default BaseRouter