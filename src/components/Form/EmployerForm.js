import React, { Fragment } from "react";
import AttachmentUpload from "./Attachment/EmployerAttachment";

const EmployerForm = (props) => {
  return (
    <Fragment>
      <div>
        <p>Create Employer Pension Account</p>
      </div>
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
            <input required={true} type="number" name="tin" placeholder="TIN" />
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
          <AttachmentUpload/>
        </div>
      </form>
    </Fragment>
  );
};

export default EmployerForm;
