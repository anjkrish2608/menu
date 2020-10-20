import React, { useState } from "react";
import API from "../../utils/API"


function SignUpForm() {
  // Setting our component's initial state
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  function handleFormSubmit(event) {
    event.preventDefault();
    if ((username && email && password)&& passwordConfirm===password) {
      API.saveUser({
        username: username,
        email: email,
        password: password
      })
      .then(()=>{
        API.loginUser({
          email: email,
          password: password
        })
        .then((data)=>{
          window.location.replace("/home/"+data.data._id);
        })
      })
      .catch(err => console.log(err));
    }
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="username">Full Name:</label>
        <input
          onChange={e=>setUsername(e.target.value)}
          name="username"
          type="text"
          className="form-control"
          placeholder="Jane Doe"
          id="username"
        />
        <label htmlFor="email">Email address:</label>
        <input
          onChange={e=>setEmail(e.target.value)}
          name="email"
          type="text"
          className="form-control"
          placeholder="someone@example.com"
          id="email"
        />
        <label htmlFor="password">Password: (Must be at least 6 characters)</label>
        <textarea
          onChange={e=>setPassword(e.target.value)}
          name="password"
          type="password"
          className="form-control"
          placeholder="Input password"
          id="password"
        />
        
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <textarea
          onChange={e=>setPasswordConfirm(e.target.value)}
          name="passwordConfirm"
          type="password"
          className="form-control"
          placeholder="Enter your password again"
          id="passwordConfirm"
        />
        {passwordConfirm === password ? (
          <button
            type="submit"
            className="button green" >
              {/* <Link to={"/home/"+}> */}
              Submit 
              {/* </Link> */}
          </button>
        ) : (
            <div>
              <button
                type="submit"
                className="button"> Submit </button>
              <div>Please check your passwords do not match</div>
            </div>
          )}

      </div>
    </form>
  );

}

export default SignUpForm;
