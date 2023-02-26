import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../FormComponents/Input/index";
import Button from "../Button";
import Select from "../FormComponents/Select";
const initialValues = {
  name: "",
  description: "",
  type: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  description: Yup.string().required("description is required"),
  type: Yup.string().required("Type is required"),
});
const onSubmit = (v) => {
  console.log(v);
};
const types = [
  { key: "select Type", value: "" },
  { key: "Reflxive", value: "Reflexive" },
  { key: "Symmetric", value: "Symmetric" },
  { key: "Transitive", value: "Transitive" },
];
export default function Edges() {
  return (
    <div>
      <h1>Edges</h1>
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
                className="rounded p-1"
              />
              <Input
                type="text"
                name="description"
                label="Description"
                className="rounded p-1"
              />
              <Select
                name="type"
                label="Type"
                className="rounded p-1"
                options={types}
              />
              <Button type="submit">submit</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
