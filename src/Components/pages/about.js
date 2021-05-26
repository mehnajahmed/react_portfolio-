import React, { Component } from 'react'

class About extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div >
            <div style={{marginLeft:`200px`, display:`inline-block`}}>
            <ul >
                <h1>Education</h1>
                <li>
                    <h2>BSc,Computer Science and Engineering
                    </h2>
                    <p>-University of Asia Pacific
                    </p>
                    <p>2017-2021</p>
                    </li>
                    <li>
                    <h2>HSC
                        </h2>
                        <p>-Holy Cross College
                    </p>
                    <p>2016</p>
                    </li>
                    <li>
                    <h2>SSC
                        </h2>
                        <p>-Tegaon Govt. Girls' High School
                    </p>
                    <p>2014</p>
                    </li>
            </ul>
            </div>
    
         <div style={{marginLeft:`120px`, display:`inline-block`,marginRight:'100px'}}>
            <ul>
                <h1>Awards</h1>
                <li>
                    <p>Achieved “Dean Award” for excellent result on 3rd year and 2nd semester.
                    </p>
                    <p>Achieved “Merit Award” for excellent result from 2nd year and 1st semester to 4th year and 1st semester.</p>
                       
                    </li>
            </ul>
            </div>
    
    
          
           
            
            </div>
        )
    }
}

export default About;