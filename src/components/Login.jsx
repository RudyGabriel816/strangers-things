import React, { useState } from "react";

const Login = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault();

  }
        return(
  <>
          <form>
            
            <label for="username">username</label>
            <input type="username" placeholder="username" id="username" name="username" />
            <label for="password">password</label>
            <iput type="password" placeholder="password" id="password" name="password" />
             <button type="submit">Log In</button>
       </form>
       <button> Don't have an account? Register here.</button>
       </>
)
}
        
       export default Login;