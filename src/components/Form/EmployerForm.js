import React, { Fragment } from "react";
import AttachmentUpload from "./Attachment/EmployerAttachment";
import classes from "./EmployerForm.module.css";

const onSubmit = (event) => {
  event.preventDefault();
};

const EmployerForm = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.heading}>
          <p>Create Employer Pension Account</p>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="text"
              name="employerName"
              placeholder="Employer Name"
            />
          </div>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="number"
              name="rcNumber"
              placeholder="RC Number"
            />
          </div>
          <div>
            <input required={true} className={classes.formField} type="number" name="tin" placeholder="TIN" />
          </div>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="number"
              name="mobileNumber"
              placeholder="Mobile number"
            />
          </div>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="text"
              name="company address"
              placeholder="Company Address"
            />
          </div>
          <div>
            <input
              required={true}
              className={classes.formField}
              type="text"
              name="text"
              placeholder="State"
            />
          </div>
          <AttachmentUpload />
        </form>
      </div>
    </Fragment>
  );
};

export default EmployerForm;
