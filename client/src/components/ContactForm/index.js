import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ContactForm(props) {

  return (
    <form action="mailto:anjini.krishnan@hotmail.com" method="post" encType="text/plain">
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          value={props.name}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Jane Doe"
          id="name"
        />
        <label htmlFor="email">Email address:</label>
        <input
          value={props.email}
          onChange={props.handleInputChange}
          name="email"
          type="text"
          className="form-control"
          placeholder="someone@example.com"
          id="email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          value={props.message}
          onChange={props.handleInputChange}
          name="message"
          type="text"
          className="form-control"
          placeholder="Input message"
          id="message"
        />
        <button type="submit" name="submit" className="btn btn-success" value="Submit"> Submit </button>
      </div>
    </form>
  );

}

export default ContactForm;
