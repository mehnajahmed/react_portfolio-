import React, { Component } from 'react'

class Footer extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div style={{backgroundColor:`black`,color:`white`,marginLeft:'200px',marginRight:'200px',marginTop:'100px'}}> 
            <div style={{display:`inline-block`,marginLeft:`100px`,float:"left"}}>
                <h3>Address </h3>
                <p>Tejkunipara,Farmgate,Dhaka</p>
            </div>
            <div className="foot" style={{display:`inline-block`,marginLeft:'100px',color:`white`}}>
                <ul style={{color:`white`}}>
                   
                
                
                
                <li>
                <h3>Email</h3>
                <p style={{color:`white`}}>mehnajahmed2017@gmail.com</p>
                </li>
                
                </ul>
            </div>

           
        </div>
        )
    }
}

export default Footer;