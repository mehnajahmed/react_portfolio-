import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import About from './pages/about'
import Project from './pages/projects'

import Home from './pages/home'
import Hobbie from './pages/hobbies'


class MyRoute extends Component{
    render(){

        return(
            <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Project}></Route>
            <Route exact path="/hobbies" component={Hobbie}></Route>
            </div>

        )
    }
}
export default MyRoute;