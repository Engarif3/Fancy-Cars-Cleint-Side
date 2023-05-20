import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

   useEffect(() => {
     fetch("http://localhost:5000/myToy")
       .then((res) => res.json())
       .then((data) => {
         setToys(data);
       });
   }, []);
  
const handleSearch = () => {
  fetch(`http://localhost:5000/getToyByText/${searchText}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        // No search results found
        Swal.fire('No Search Results', 'No toys found matching your search.', 'info');
      } else {
        setToys(data);
      }
    })
    .catch((error) => {
      // Handle fetch error
      console.error("Error occurred during search:", error);
    });
};

  const handleShowAll =() =>{
    fetch("http://localhost:5000/myToy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">All Toys</h1>
        <div className="search-box p-2 text-center d-flex justify-content-center gap-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search by Toy name"
            className="p-1 rounded-2 text-center"
          />{" "}
          <Button variant="primary" onClick={handleSearch}>Search</Button>
          <Button variant="primary" onClick={handleShowAll}>Show All</Button>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price ($)</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Category</th>
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
                      <Button variant="primary">View Details</Button>
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
