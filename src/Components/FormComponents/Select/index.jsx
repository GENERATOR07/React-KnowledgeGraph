import { Field, ErrorMessage } from "formik";
import React from "react";

export default function Select({ label, name, options, ...rest }) {
  return (
    <div className="flex flex-col  m-2 grow">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <div className="font-thin text-sm text-red-600">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
