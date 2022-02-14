import React, { useState, useEffect } from "react";

const ContactForm = ({ addOrEdit, currentId, data }) => {
  const values = {
    fullName: "",
    company: "",
    status: "",
    notes: "",
  };
  const [initialState, setState] = useState(values);

  console.log("currentId", currentId);

  const { fullName, company, status, notes } = initialState;

  useEffect(() => {
    if (currentId === "") {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[currentId] });
    }
  }, [currentId, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(initialState);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user" />
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt" />
              </div>
            </div>
            <input
              className="form-control"
              placeholder="company"
              name="company"
              value={company}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope" />
              </div>
            </div>
            <input
              className="form-control"
              placeholder="status"
              name="status"
              value={status}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="notes"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={currentId === "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
