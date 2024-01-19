import React from "react";
import "./../assets/style/AddForm.scss";
import Button from "@mui/material/Button";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { postProduct, getAllProducts } from "../redux/slices/ProductSlice";
import { useEffect } from "react";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(10, "Too Little!")
    .max(100000, "Too Much!")
    .positive("Must be a positive value")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(90, "Too Long!")
    .required("Required"),
});

export default function AddFrom() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const data = useSelector((state) => state.product.data);
  console.log("DATA", data);
  return (
    <>
      <section className="form">
        <div className="container">
          <h1>Add Product</h1>
          <Formik
            initialValues={{
              name: "",
              price: "",
              image: "",
              description: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              console.log(values);
              dispatch(postProduct(values));
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="name" className="input" placeholder="Name" />
                {errors.name && touched.name ? (
                  <div>{errors.firstName}</div>
                ) : null}

                <Field name="price" className="input" placeholder="Price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}

                <Field name="image" className="input" placeholder="Image" />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}

                <Field
                  name="description"
                  className="input"
                  placeholder="Description"
                />
                {errors.description && touched.description ? (
                  <div>{errors.description}</div>
                ) : null}

                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}
