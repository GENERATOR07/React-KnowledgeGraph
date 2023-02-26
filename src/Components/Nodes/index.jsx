import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../FormComponents/Input/index";
import Button from "../Button";
const initialValues = {
  name: "",
  description: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  description: Yup.string().required("description is required"),
});
const onSubmit = (v) => {
  console.log(v);
};
export default function Nodes() {
  return (
    <div>
      <h1>Nodes</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <Input
                type="text"
                name="name"
                label="Name"
                control="input"
                className="rounded p-1"
              />
              <Input
                type="text"
                name="description"
                label="Description"
                control="input"
                className="rounded p-1"
              />
              <Button type="submit">submit</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
