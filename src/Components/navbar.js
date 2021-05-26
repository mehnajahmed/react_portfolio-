import React, { Component } from 'react'

import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
    <div>
        <img className='headimg' src={require('./images/me2.jpg')} />
        <nav id='mynav'>
     <ul className='nav'>
     <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>



     </ul>
     </nav>



    </div>


        );
    }
}

export default Navbar;