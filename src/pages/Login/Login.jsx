import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

const [signState, setSignState] = useState("Sign In")
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false)

const user_auth = async ()=>{
  event.preventDefault();
  setLoading(true);
  if(signState==="Sign In"){
    await login(email, password);
  }else{
    await signup(name, email, password);
  }
  setLoading(false);
}

  return (
    loading?
    <div className="loading-spinner">
      <img src={netflix_spinner} alt=""/>
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt=""></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <from>
        {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}}
         type="text" placeholder='Your name'/>:<></>}
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} 
          type="e-mail" placeholder='Email'/>

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
           type="Password" placeholder='password'/>
          <button onClick={user_auth} type='Submit'>{signState}</button>
          <div className="from-help">
            <div className="Remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </from>
        <div className="form-switch">
        {signState==="Sign In"?<p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
        :<p>Already have account?<span onClick={()=>{setSignState("Sign In")}}>Sign Up Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login 
