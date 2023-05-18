import React from "react";
import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myToy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setToys((prevToys) =>
            prevToys.map((toy) => (toy._id === data._id ? data : toy))
          );
          Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: "The toy information has been updated successfully.",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/myToy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Deleted Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  const [editModalShow, setEditModalShow] = useState(false);
  const [editedToy, setEditedToy] = useState(null);

  const handleEditModalShow = (toy) => {
    setEditedToy(toy);
    setEditModalShow(true);
  };

  const handleEditModalHide = () => {
    setEditModalShow(false);
    setEditedToy(null);
  };

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">My Toys</h1>
        <div className="search-box p-2 text-center">
          <input type="text" className="p-1" /> <button>Search</button>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Category</th>
              {/* <th>Sub-Category</th> */}
              <th>Description</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>{toy.selectedCategory}</td>
                {/* <td>{toy.selectedSubcategory}</td> */}
                <td>{toy.details}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleEditModalShow(toy)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <button onClick={() => handleDelete(toy._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {editedToy && (
        <UpdateToyModal
          show={editModalShow}
          onHide={handleEditModalHide}
          toy={editedToy}
          handleToyUpdate={handleToyUpdate}
        />
      )}
    </div>
  );
};

export default MyToys;
