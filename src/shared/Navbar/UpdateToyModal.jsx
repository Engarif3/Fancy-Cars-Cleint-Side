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
          className="container text-center"
          onSubmit={handleSubmit((data) => {
            handleToyUpdate(data);
            props.onHide(); // Close the modal after submitting the form
          })}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="text-input"
            {...register("toyName")}
            placeholder="Toy Name"
            defaultValue={props?.toy?.toyName}
          />
          <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.toy?._id}
          />
          <input
            className="text-input"
            {...register("sellerName")}
            placeholder="Seller Name"
            defaultValue={props?.toy?.sellerName}
          />
          <input
            className="text-input"
            {...register("sellerEmail")}
            placeholder="Seller Email"
            defaultValue={props?.toy?.sellerEmail}
          />
          <input
            className="text-input"
            {...register("price")}
            placeholder="Price"
            defaultValue={props?.toy?.price}
          />
          <input
            className="text-input"
            {...register("rating")}
            placeholder="Rating"
            defaultValue={props?.toy?.rating}
          />
          <input
            className="text-input"
            {...register("quantity")}
            placeholder="Quantity"
            defaultValue={props?.toy?.quantity}
          />
          <input
            className="text-input"
            {...register("details")}
            placeholder="Details"
            defaultValue={props?.toy?.details}
          />
          <select
            className="text-input"
            {...register("selectedCategory")}
            onChange={handleCategoryChange} // Add onChange event handler
            value={watch("selectedCategory")} // Use watch to get the current value
          >
            <option value="">Select a category</option>
            <option value="Sports Cars">Sports Cars</option>
            <option value="Trucks">Trucks</option>
            <option value="Buses">Buses</option>
          </select>
          <input
            className="text-input"
            {...register("photo")}
            placeholder="Photo URL"
            type="url"
            defaultValue={props?.toy?.photo}
          />
          <br />
          <input className="submit-btn mt-4" value="Update Toy" type="submit" />
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
