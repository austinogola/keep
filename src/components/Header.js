import React from 'react'
import './Header.css'

class Header extends React.Component{

    componentDidMount(){
        const loginBtn=document.querySelector('.loginBtn')
        const signupBtn=document.querySelector('.signupBtn')
    }
    render(){
        return(
            <div className='Header'>
                <div className='row' style={{minHeight:'60px'}}>
                    <div className="col-3 border  d-flex justify-content-around align-items-center">
                        <h3>KEEP</h3>
                    </div>
                    <div className="col-6 border"></div>
                    <div className="Header-logs col-3 border d-flex justify-content-around align-items-center">
                        <h5 className='loginBtn'>Login</h5>
                        <h5 className='signupBtn'>Signup</h5>
                        <div>A.O</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header