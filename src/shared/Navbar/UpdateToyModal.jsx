import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    watch,
    formState: { errors },
  } = useForm();

  const { handleToyUpdate } = props;

  // Update selected category value when category selection changes
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setValue("selectedCategory", selectedCategory);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100 m-auto"
          id="contained-modal-title-vcenter"
        >
          Update Toy Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="container row row-cols-3 "
          onSubmit={handleSubmit((data) => {
            handleToyUpdate(data);
            props.onHide(); // Close the modal after submitting the form
          })}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="text-center">
          <h6 >Toy Name</h6>
          <input
            className="text-input"
            {...register("toyName")}
            placeholder="Toy Name"
            defaultValue={props?.toy?.toyName}
          />
          </div>
          
          <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.toy?._id}
          />
          <div className="text-center">
            <h6>Seller Name</h6>
          <input
            className="text-input"
            {...register("sellerName")}
            placeholder="Seller Name"
            defaultValue={props?.toy?.sellerName}
          />
          </div>
         <div className="text-center">
          <h6>Seller Email</h6>
          <input
            className="text-input"
            {...register("sellerEmail")}
            placeholder="Seller Email"
            defaultValue={props?.toy?.sellerEmail}
          />
         </div>
         <div className="text-center">
          <h6>Price</h6>
          <input
            className="text-input"
            {...register("price")}
            placeholder="Price"
            defaultValue={props?.toy?.price}
          />
         </div>
         <div className="text-center">
          <h6>Rating</h6>
          <input
            className="text-input"
            {...register("rating")}
            placeholder="Rating"
            defaultValue={props?.toy?.rating}
          />
         </div>
         <div className="text-center">
          <h6>Quantity</h6>
          <input
            className="text-input"
            {...register("quantity")}
            placeholder="Quantity"
            defaultValue={props?.toy?.quantity}
          />
         </div>
         <div className="text-center">
          <h6>Details</h6>
          <input
            className="text-input"
            {...register("details")}
            placeholder="Details"
            defaultValue={props?.toy?.details}
          />
         </div>
         <div className="text-center">
          <h6>Category</h6>
          <select
            className="text-input px-4  py-1"
            {...register("selectedCategory")}
            onChange={handleCategoryChange} 
            value={watch("selectedCategory")} 
          >
            <option value="">Select a category</option>
            <option value="Sports Cars">Sports Cars</option>
            <option value="Trucks">Trucks</option>
            <option value="Buses">Buses</option>
          </select>
         </div>
         <div className="text-center">
          <h6>Photo URL</h6>
          <input
            className="text-input"
            {...register("photo")}
            placeholder="Photo URL"
            type="url"
            defaultValue={props?.toy?.photo}
          />
         </div>
          <br />
          <div className="d-flex justify-content-center w-100">

          <input className="submit-btn mt-4 px-4 py-2 bg-primary rounded-2" value="Update Toy" type="submit" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <button className="bg-danger">Update</button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateToyModal;
