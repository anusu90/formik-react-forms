"use client";
import React, { useState } from "react";

export interface FormStepperPropsModel {
  children?: React.ReactNode;
}

const FormStepper: React.FunctionComponent<FormStepperPropsModel> = (props) => {
  const { children } = props;
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const steps = ["Full Name", "Address", "Submit"];

  const getClassName = (index: number): string => {
    if (index <= step) return "step-success";
    return "";
  };

  const handleNextStep = () => {
    setStep((step + 1) % steps.length);
  };

  const handlePrevStep = () => {
    let newStep = step - 1 >= 0 ? step - 1 : 0;
    setStep(newStep);
  };

  const rendetStepButtons = () => {
    return (
      <div className="flex justify-around">
        <button
          className="btn btn-primary"
          onClick={handlePrevStep}
          disabled={step === 0}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextStep}
          disabled={step == steps.length - 1}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <ul className="steps">
          {steps.map((step, index) => (
            <li key={step} className={`step ${getClassName(index)}`}>
              {step}
            </li>
          ))}
        </ul>
      </div>
      <div className="min-h-96 flex justify-center mt-20">
        {childrenArray[step]}
      </div>
      {rendetStepButtons()}
    </>
  );
};

export default FormStepper;
