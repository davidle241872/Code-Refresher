import React from 'react'
import '../LogIn.css';

const LogIn = ()=> {
  return (
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required></input>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required></input>
        </div>
        
        <div className="remember-forgot">
          <label><input type="checkout" />Remember me</label>
          <a href='#'>Forgot Password</a>
        </div>


<button type="submit">Login</button>

<div className='register-link'>
  <p>Don't have an account? <a href="#">Register</a></p>
</div>
      </form>


    </div>
  )
}

export default LogIn