import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { SIGN_UP } from "../utils/actions";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignUpForm(props) {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({})
  
  function save(){
    API.saveUser({
      username: formObject.username,
      email: formObject.email,
      password: formObject.password
    })
      .catch(err => console.log(err))
  }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted the API.authenticate will check the username and assword to allow user to have login
  //then use the API.saveUser method to save the user data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      save();
      API.loginUser({
        email: formObject.email,
        password: formObject.password
      })
        .then(function(data) {
          window.location.replace("/home");
        })
        .catch(err => console.log(err));
    }
  }

    return (
      <form action="mailto:anjini.krishnan@hotmail.com" method="post" encType="text/plain">
        <div className="form-group">
          <label htmlFor="username">Full Name:</label>
          <input
            value={username}
            onChange={handleInputChange}
            name="username"
            type="text"
            className="form-control"
            placeholder="Jane Doe"
            id="username"
          />
          <label htmlFor="email">Email address:</label>
          <input
            value={email}
            onChange={handleInputChange}
            name="email"
            type="text"
            className="form-control"
            placeholder="someone@example.com"
            id="email"
          />
          <label htmlFor="password">Password:</label>
          <textarea
            value={password}
            onChange={handleInputChange}
            name="password"
            type="text"
            className="form-control"
            placeholder="Input password"
            id="password"
          />
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <textarea
            value={passwordConfirm}
            onChange={handleInputChange}
            name="passwordConfirm"
            type="text"
            className="form-control"
            placeholder="Enter your password again"
            id="passwordConfirm"
          />
          {props.passwordConfirm === props.password ? (
            <button type="submit" name="submit" className="buttton green" value="Submit" onClick={handleFormSubmit}> Submit </button>
          ) : (
              <div>
                <button type="submit" name="submit" className="button" value="Submit" onClick={handleFormSubmit}> Submit </button>
                <div>Please check your passwords do not match</div>
              </div>
            )}

        </div>
      </form>
    );

  }

  export default SignUpForm;
