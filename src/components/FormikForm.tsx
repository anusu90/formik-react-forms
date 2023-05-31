"use client";
import { useFormik } from "formik";
import FormStepper from "./FormStepper";

const FormikForm = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { firstName: "", lastName: "", address: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div>Formik Forms</div>
      <FormStepper>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your full name?</span>
          </label>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            value={values.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Second name"
            className="input input-bordered w-full max-w-xs mt-3"
            onChange={handleChange}
            value={values.lastName}
          />
        </div>

        <div className="form-control w-full max-w-xs mt-5">
          <label className="label">
            <span className="label-text">Address?</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            value={values.address}
          />
        </div>

        <div>
          <div className="my-10">
            <div>First Name: {values.firstName}</div>
            <div>Second Name: {values.lastName}</div>
            <div>Address: {values.address}</div>
          </div>
          <button className="btn btn-primary" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </FormStepper>
    </div>
  );
};

export default FormikForm;
