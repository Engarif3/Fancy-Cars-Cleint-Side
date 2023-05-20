import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
  const { user, logOut } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.name.value;
    const sellerEmail = form.email.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = form.quantity.value.trim();
    const details = form.details.value;

  // price input field validation
    if (isNaN(price) || price < 0 || Object.is(price, -0)) {
      Swal.fire({
        title: 'Invalid Price Input',
        text: 'Please enter a valid price.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
 // rating input field validation
    if (isNaN(rating) || rating < 0 || rating > 5 || Object.is(rating, -0)) {
      Swal.fire({
        title: 'Invalid Rating Input',
        text: 'Please enter a valid rating between 0 and 5.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

  // Check if the quantity is a valid positive integer
  const quantityRegex = /^[1-9]\d*$/; 
  if (!quantityRegex.test(quantity)) {
    Swal.fire({
      title: 'Invalid Quantity Input',
      text: 'Please enter a valid positive and integer quantity.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }

    const newToy = {
      photo,
      toyName,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      details,
      selectedCategory,
    };
    fetch("http://localhost:5000/addToy", {
        method: "POST",
        headers: {
            "content-type":"application/json",
        },
        body:JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        if (data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Toy Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
   
  };
  return (
    <div>
      <Container>
        <div className=" w-75 border mx-auto mt-4 mb-2  rounded bg-light">
          <h4 className="text-center mt-2">Add A Toy</h4>
          <Form className="w-75  m-auto py-4 " onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter your toy photo URL"
                // required
              />
            </Form.Group>
            <div className="d-flex gap-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Toy Name</Form.Label>
                <Form.Control
                  type="text"
                  name="toyName"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seller Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  defaultValue={user.displayName}
                  readOnly
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seller Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={user.email}
                  defaultValue={user.email}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price ($)</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Enter Price"
                  // required
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="rating"
                  placeholder="Enter Price"
                  // required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Available Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  placeholder="Enter Quantity"
                  // required
                />
              </Form.Group>
            </div>
            <Form.Select
              aria-label="Default select example"
              onChange={handleCategoryChange}
              value={selectedCategory}
              // required
            >
              <option value="">Select a category</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Truck">Truck</option>
              <option value="Bus">Bus</option>
            </Form.Select>
            <Form.Group
              className="mb-0"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write details here."
                name="details"
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Add this toy
            </Button>
            <br />
            <Form.Text className="tex-success"></Form.Text>{" "}
            <Form.Text className="text-danger"></Form.Text>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default AddToy;
