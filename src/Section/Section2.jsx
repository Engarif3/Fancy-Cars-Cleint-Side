import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import image from "../assets/toy.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Feedback submitted");
    event.currentTarget.disabled = true;
    event.target.reset();
  };
  return (
    <Container  style={{marginTop:"5rem"}}>
      <h2 className="text-center fst-italic">
        Your Opinion Matters. We will get back to you.
      </h2>
      <div className="d-md-flex d-lg-flex justify-content-center align-items-center">
        <img  src={image} alt=""/>
        <div className="w-100">
          <div className="  mx-auto mt-4 mb-2 " >
            <Form className="w-50  m-auto py-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone/Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Enter your number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Write your feedback here." required/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Feedback
              </Button>{" "}
              <br />
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default Section2;
