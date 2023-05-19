import React from "react";
import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const AllToys = () => {
  // const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:5000/myToy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);


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
                <div className="d-flex justify-content-center">
              <Link className="w-75 mb-2" to={`/allToys/${toy._id}`}>
                <Button  variant="primary">
                  View Details
                </Button>
              </Link>
            </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  
    </div>
  );
};

export default AllToys;
