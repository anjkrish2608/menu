import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignInForm(pops) {
// Setting our component's initial state
const [formObject, setFormObject] = useState({})

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({ ...formObject, [name]: value })
};

// When the form is submitted the API.authenticate will check the username and assword to allow user to have login
//then use the API.saveUser method to save the user data
function handleFormSubmit(event) {
  event.preventDefault();
  if (formObject.username && formObject.email && formObject.password) {
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
        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          onChange={handleInputChange}
          name="message"
          type="text"
          className="form-control"
          placeholder="Input message"
          id="message"
        />
        <button type="submit" name="submit" className="btn btn-success" value="Submit" onClick={handleFormSubmit}> Submit </button>
      </div>
    </form>
  );

}

export default SignInForm;
