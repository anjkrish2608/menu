import React, {useState} from "react";
import API from "../../utils/API";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignInForm() {
// Setting our component's initial state
const [email, setEmail] = useState();
const [password, setPassword] = useState();

function handleFormSubmit(event) {
  event.preventDefault();
  if (email && password) {
    console.log({email: email, password: password})
    API.loginUser({
      email: email,
      password: password
    }).then(function(data) {
        console.log(`Email: ${email} logged in.`)
        //window.location.replace("/home");
      })
      .catch(err => console.log(err));
  }
}
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          onChange={e=>setEmail(e.target.value)}
          name="email"
          type="text"
          className="form-control"
          placeholder="someone@example.com"
          id="email"
        />
        <label htmlFor="password">password:</label>
        <textarea
          onChange={e=>setPassword(e.target.value)}
          name="password"
          type="text"
          className="form-control"
          placeholder="Input password"
          id="password"
        />
        <button type="submit" className="button green"> Submit </button>
      </div>
    </form>
  );

}

export default SignInForm;
