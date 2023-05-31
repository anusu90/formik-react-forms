"use client";
import { useFormik } from "formik";
import FormStepper from "./FormStepper";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  address: string;
};

const FormikForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <div>React Forms</div>
      <FormStepper>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your full name?</span>
          </label>
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered w-full max-w-xs"
            {...register("firstName", { required: true })}
          />
          <input
            type="text"
            placeholder="Second name"
            className="input input-bordered w-full max-w-xs mt-3"
            {...register("lastName", { required: true })}
          />
        </div>

        <div className="form-control w-full max-w-xs mt-5">
          <label className="label">
            <span className="label-text">Address?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("address", { required: true })}
          />
        </div>

        <div>
          <div className="my-10">
            <div>First Name: {getValues("firstName")}</div>
            <div>Second Name: {getValues("lastName")}</div>
            <div>Address: {getValues("address")}</div>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </FormStepper>
    </div>
  );
};

export default FormikForm;
