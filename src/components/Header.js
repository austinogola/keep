import React from 'react'
import './Header.css'
import keepImg from './keep-icon.png'

class Header extends React.Component{

    // componentDidMount(){
    //     const loginBtn=document.querySelector('.loginBtn')
    //     const signupBtn=document.querySelector('.signupBtn')
    // }
    render(){
        return(
            <div className='Header mb-5'>
                <div className='row' style={{minHeight:'60px'}}>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <i><img src={keepImg} alt="keep"/></i>
                        <h3 className='keep'>Keep</h3>
                    </div>
                    <div className="col-6"></div>
                    <div className="Header-logs col-3 d-flex justify-content-around align-items-center">
                        {/* <h5 className='loginBtn'>Login</h5>
                        <h5 className='signupBtn'>Signup</h5>
                        <div>A.O</div> */}
                    </div>
                </div>
                <form action="" className='loginForm  p-4 w-50 border'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email"  name='email' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' className='form-control' required/>
                    </div>
                    <button className='btn btn-large btn-warning' type='submit'>
                        Login
                    </button>
                    <small className='form-text'>Don't have an account? Register<a href="#">Here</a></small>
                </form>

                <form action="" className='signupForm  p-4 w-50 border'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email"  name='email' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' className='form-control' required/>
                    </div>
                    <button className='btn btn-large btn-warning' type='submit'>
                        Register
                    </button>
                    <small className='form-text'>Already have an account?Login <a href="">Here</a></small>
                </form>
            </div>
        )
    }
}

export default Header