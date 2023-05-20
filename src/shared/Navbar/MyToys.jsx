import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editedToy, setEditedToy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:5000/myToy")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(compareByPrice(sortOrder));
        setToys(sortedData);
      });
  }, [sortOrder]);

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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToy/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Success!',
                text: 'Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const compareByPrice = (order) => {
    return function (a, b) {
      const priceA = typeof a.price === "string" ? parseFloat(a.price) : a.price;
      const priceB = typeof b.price === "string" ? parseFloat(b.price) : b.price;

      if (priceA < priceB) {
        return order === "asc" ? -1 : 1;
      }
      if (priceA > priceB) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    };
  };

  // Modal show
  const handleEditModalShow = (toy) => {
    setEditedToy(toy);
    setEditModalShow(true);
  };

  const handleEditModalHide = () => {
    setEditModalShow(false);
    setEditedToy(null);
  };

  return (
    <Container>
      <div className="my-jobs-container">
        <h1 className="text-center p-4">My Toys</h1>
        <div className="p-2 text-center d-flex justify-content-end align-items-center gap-2">
          
          <div className="fw-bold">Sort Price:</div> <Button variant="dark" onClick={handleSortToggle}>
                  {sortOrder === "asc" ? "High to Low" : "Low to High"}
                </Button>
    
        </div>

        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>
                Price ($)
              </th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Category</th>
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
                <td>{toy.details}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleEditModalShow(toy)}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </Button>
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
    </Container>
  );
};

export default MyToys;
