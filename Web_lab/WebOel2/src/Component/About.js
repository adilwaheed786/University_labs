import React, { useState }  from 'react'
import Detailslist from './Detailslist';
import { faUserCheck} from '@fortawesome/free-solid-svg-icons'
import Heading from './Heading';
function About()
{
    
    var [name,setName]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }
    return(
        <>
        
            <section id="About">
            <div className="container-fluid">
                <div className="row p-5 d-flex align-items-center justify-content-center">
                    <div className="col-lg-12 col-md-12 ">
                        <div className="resume box">
                        <Heading icon={faUserCheck} head="About"/>
                            <p className="para2"> Extremely motivated to constantly develop my skills and grow professionally. I
                                am confident in
                                my ability to come up with interesting ideas and to convert them into Digital Reality</p>
                        </div>
                        <div className="about2">
                            <h3>Manager</h3>
                            <ul className="details">
                                <Detailslist />
                                
                            </ul>
                            <p>I am UnderGraduate <b>Mechanical Engineer</b> at <b>Bahria University karachi Campus</b>.
                                Currently I am in
                                my <b>4<sup>rd</sup></b> year of University. Till now I have secured <b>4</b> CGPA.
    
                            </p>
                        </div>
                        <div className="resume box">
                        <Heading icon={faUserCheck} head="Insert Car Details"/>
        
                        </div>
                      
                        <form  >
                    <div >
                    <div class="form-group">
                      <label for="fullname">Car Name</label>
                      <input type="text" class="form-control " name="name"  placeholder="Car Name" required/>
                    </div>
                    <div class="form-group">
                      <label for="email">Car Details</label>
                      <input type="text" class="form-control" name="details"  placeholder="Car Details" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Price</label>
                        <input type="number" class="form-control"   name="price"  placeholder="Price" required/>
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-info m-2" name="submit" value="Register">Register</button>
                      </div>
                    </div>
                  </form>
                    </div>
                </div>
            </div>         
        </section> 
        </>
    );
}
export default About;