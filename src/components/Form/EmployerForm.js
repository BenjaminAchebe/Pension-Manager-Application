import React from "react";

const EmployerForm = (props) => {
  return (
    <form>
      <div>
        <div>
          <input
            required={true}
            type="text"
            name="employerName"
            placeholder="Employer Name"
          />
        </div>
        <div>
          <input
            required={true}
            type="number"
            name="rcNumber"
            placeholder="RC Number"
          />
        </div>
        <div>
          <input
            required={true}
            type="number"
            name="tin"
            placeholder="TIN"
          />
        </div>
        <div>
          <input
            required={true}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            required={true}
            type="number"
            name="mobileNumber"
            placeholder="Mobile number"
          />
        </div>
        <div>
          <input
            required={true}
            type="text"
            name="company address"
            placeholder="Company Address"
          />
        </div>
        <div>
          <input
            required={true}
            type="text"
            name="email"
            placeholder="State"
          />
        </div>
      </div>
    </form>
  );
};

export default EmployerForm;
