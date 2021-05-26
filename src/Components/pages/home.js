import React, { Component } from 'react'

class Home extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div style={{marginLeft:'400px'}}>
                <h1>Hi! It's Mehnaj Ahmed</h1>
                <p>Final year student of CSE at University of Asia Pacific.</p>
               <p>Quick Learner!</p>
               <p>Thirsty of learning new things!</p>
            </div>
        )
    }
}

export default Home;