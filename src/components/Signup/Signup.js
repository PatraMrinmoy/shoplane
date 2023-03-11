import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signup = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName:'',
        mobile:'',
        email: '',
        password:'',
    });

    const onchangeHandler = (event) => {
       setUser({
        ...user,
        [event.target.name]:event.target.value
       })
    };

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
        axios.post('url',user)
        .then(response=>console.log(response.data))
        .catch((error)=>console.log(error));
    }

    return (
        <div>
            <marquee>Hello {user.firstName} ....</marquee>
            <div className="containeer"> 
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="wrapper">
                        <form onSubmit={onSubmitHandler}>
                            <h2 className='text-center'>Register</h2>
                            {/* <h3>Welcome {user.name},{user.email}</h3> */}
                            <hr />
                            <div className="form-group">
                                <label htmlFor=" ">First Name</label>
                                <input type="text" value={user.name} onChange={onchangeHandler} name="firstname" id="firstname" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" ">Last Name</label>
                                <input type="text" value={user.name} onChange={onchangeHandler} name="lastname" id="lastname" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" ">Mobile</label>
                                <input type="tel" value={user.name} onChange={onchangeHandler} name="mobile" id="mobile" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor=" ">Email</label>
                                <input type="email" value={user.email} onChange={onchangeHandler} name="email" id="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" ">Password</label>
                                <input type="password" value={user.name} onChange={onchangeHandler} name="password" id="password" className="form-control" />
                            </div>
                            
                            <Link to='/' button  type="button" class="btn btn-primary btn-block mb-4" >Sign Up</Link>
                            <br/>
                            <button type="reset" className="btn btn-secondary reset ">Reset</button>
                        </form>
                        
                        <br/>
                        <p className='text-center'>
                          Already have an account ? <Link to='/login' >Login here </Link> 
                        </p>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )
}
export default Signup;