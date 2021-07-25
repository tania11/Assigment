import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { UserInterface } from "../interfaces/customInterfaces";
import {Form, Container, Toast, Col, Button, Row} from 'react-bootstrap';

const userFormValidator: FC<UserInterface> = (empData: UserInterface) => {
  const errors: any = {} as UserInterface;

  if (!empData.name) {
    errors.name = "Please Enter Employee Name";
  } else if (empData.name.length > 20) {
    errors.name = "Name cannot exceed 20 characters";
  }

  if (!empData.address) {
    errors.address = "Please Enter Employee Location";
  }

  if (!empData.email) {
    errors.email = "Please Enter Email ID";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
const UserForm: FC = () => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      address: "",
      phone: '',
      website: "",
      company: "",
    },
    //validate: userFormValidator,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      }; 

      fetch('/userApi/user/addUser', requestOptions)
          .then(response => {
            setShow(true);
            formik.resetForm();
            console.log(response.json());
          });
      },
  });

  return (
    <Container>
    {show && 
    <Row className="mb-5">
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={30000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">User created</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, new user created successfully!!!!!!</Toast.Body>
        </Toast>
      </Col>
    </Row>}
    <form onSubmit={formik.handleSubmit}>
    <Form.Floating className="mb-3">
      <Form.Control
       type="text" name="id" placeholder="user id" id="uid" value={formik.values.id} onChange={formik.handleChange}
      />
      <label htmlFor="uid">User Id</label>
    </Form.Floating>

    <Form.Floating className="mb-3">
      <Form.Control
        type="text" name="name" placeholder="Name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="name">Name</label>
    </Form.Floating >
    {formik.touched.name && formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null}

     <Form.Floating className="mb-3">
      <Form.Control
        type="text" name="username" placeholder="Username" id="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="username">Username</label>
    </Form.Floating>
    {formik.touched.username && formik.errors.username ? <span style={{ color: "red" }}>{formik.errors.username}</span> : null}

     <Form.Floating className="mb-3">
      <Form.Control
        type="text" name="address" id="address" placeholder="Address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="address">Address</label>
    </Form.Floating>
    {formik.touched.address && formik.errors.address ? <span style={{ color: "red" }}>{formik.errors.address}</span> : null}



     <Form.Floating className="mb-3">
      <Form.Control placeholder="Phone Number"
        type="text" name="phone"  id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="phone">Phone Number</label>
    </Form.Floating>
   

     <Form.Floating className="mb-3">
      <Form.Control placeholder="Email"
        type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="email">Email</label>
    </Form.Floating>
    {formik.touched.email && formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null}

     <Form.Floating className="mb-3">
      <Form.Control placeholder="Website"
        type="text" name="website" id="website" value={formik.values.website} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      <label htmlFor="website">Website</label>
    </Form.Floating>
     <button type="submit">Create user</button>
    </form>
  </Container>
    
  );
};

export default UserForm;
