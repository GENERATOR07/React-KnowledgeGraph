import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Input({ label, name, ...rest }) {
  return (
    <div className="flex flex-col  m-2 grow">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name}>
        {(msg) => <div className="font-thin text-sm text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
