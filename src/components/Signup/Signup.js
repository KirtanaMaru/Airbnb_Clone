import React from 'react'
import './Signup.css';
import { useState } from 'react';
import facebookicon from '../../images/colorfacebook.png';
import google from '../../images/googleicon.png';
import apple from '../../images/apple.png';
import emailicon from '../../images/email.png'; 



function Signup({isOpen,isClose,thanku}) {
    const [Email,setEmail] = useState('');
    const [Password,setPassword]= useState('');
    const [SubmitData,setSubmitData] = useState('');
    
    const handleEmail =(event) =>{
        setEmail(event.target.value);
        
    }
    const handlePassword =(event) =>{
        setPassword(event.target.value);
        
    }
    const handleSubmitData = (event) =>{
        event.preventDefault();
        const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailpattern.test(Email)){
            alert('Please enter a valid email address.');
            return;
        }
        if(Password.length<8){
            alert('Password must be at least 8 characters long.');
            return
        }
        const formdata={
            email:Email,
            password:Password
        }
        setSubmitData(formdata);
        console.log(SubmitData.email)
        console.log(SubmitData.password)
        thanku()
        isClose()
        

    }




   
    if(!isOpen)
    {
        return null
    }
    else{
    
  return (
    <div className='signup-card-overlay'>
        <div className='signup-card'>
            <div style={{display:'flex',borderBottom:'1px solid lightgray'}}>
            <div onClick={isClose} className='close'>&times;</div>
            <div className='card-heading'>Log in or sign up</div>
            </div>
            <div>
                <div style={{fontSize:'21px',fontWeight:'600',padding:'20px 20px'}}>Welcome to Airbnb</div>
                <form onSubmit={handleSubmitData} className='signup-form' method='get'>
                <input type='text' placeholder='Enter your email' value={Email} onChange={handleEmail} className='email'/>
                <input type='text' placeholder='Enter password' value={Password} onChange={handlePassword} className='password'/>
                <input type='submit' className='submit' />
                </form>
                <div style={{display:'flex'}}>
                <div className='line'></div>
                <div style={{padding:'0px 5px'}}>or</div>
                <div className='line'></div>
                </div>
                <div>
                    <div class='continue-with-email'>
                        <img src={facebookicon} alt='imgicon' className='facebookicon'></img>
                        <div style={{paddingLeft:'30px',marginLeft:'100px'}}> Continue with Facebook</div>
                    </div>
                    <div class='continue-with-email'>
                        <img src={google} alt='imgicon' className='facebookicon'></img>
                        <div style={{paddingLeft:'30px',marginLeft:'102px'}}> Continue with Google</div>
                    </div>
                    <div class='continue-with-email'>
                        <img src={apple} alt='imgicon' className='facebookicon'></img>
                        <div style={{paddingLeft:'30px',marginLeft:'104px'}}> Continue with Apple</div>
                    </div>
                    <div class='continue-with-email'>
                        <img src={emailicon} alt='imgicon' className='facebookicon'></img>
                        <div style={{paddingLeft:'30px',marginLeft:'104px'}}> Continue with Email</div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
                  }
}

export default Signup
