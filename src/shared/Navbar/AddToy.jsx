import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from 'sweetalert2'

const AddToy = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.name.value;
    const sellerEmail = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

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
      selectedSubcategory,
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
                confirmButtonText: 'Cool'
              })
        }
    })
    // console.log(newToy);
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
                  //   required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seller Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="dynamic name"
                  //   required
                />
              </Form.Group>
            </div>
            <div className="d-flex gap-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seller Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="dynamic email address"
                  //   required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
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
            >
              <option value="">Select a category</option>
              <option value="Sports Cars">Sports Cars</option>
              <option value="Trucks">Trucks</option>
              <option value="Buses">Buses</option>
            </Form.Select>
            {/* ... */}
            {selectedCategory && (
              <Form.Select
                aria-label="Default select example"
                onChange={handleSubcategoryChange}
                value={selectedSubcategory}
              >
                <option value="">Select a sub-category</option>
                {selectedCategory === "Sports Cars" && (
                  <>
                    <option value="Convertibles">Convertible</option>
                    <option value="Racing Cars">Racing Car</option>
                    <option value="Luxury Cars">Luxury Car</option>
                  </>
                )}
                {selectedCategory === "Trucks" && (
                  <>
                    <option value="Pickup Trucks">Pickup Truck</option>
                    <option value="Dump Trucks">Dump Truck</option>
                    <option value="FireTrucks">Fire Truck</option>
                  </>
                )}
                {selectedCategory === "Buses" && (
                  <>
                    <option value="School Buses">School Bus</option>
                    <option value="Double Decker Buses">
                      Double Decker Bus
                    </option>
                    <option value="Tour Buses">Tour Bus</option>
                  </>
                )}
              </Form.Select>
            )}
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
