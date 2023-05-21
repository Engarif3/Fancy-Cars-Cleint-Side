import React, { useContext, useRef } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  const linkRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("All Toys");

  useEffect(() => {
    fetch("https://fancy-car.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleButtonClick = () => {
    if (!user) {
      Swal.fire({
        title: "Please login first to view details",
        icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          linkRef.current.click();
        }
      });
    } else {
      linkRef.current.click();
    }
  };

  const handleSearch = () => {
    fetch(`https://fancy-car.vercel.app/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          // No search results found
          Swal.fire("No Search Results", "No toys found", "info");
        } else {
          setToys(data);
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error("Error occurred during search:", error);
      });
  };

  const handleShowAll = () => {
    fetch("https://fancy-car.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

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
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="primary" onClick={handleShowAll}>
            Show All
          </Button>
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
                    <div className="w-75 mb-2">
                      <Link
                        ref={linkRef}
                        to={`/allToys/${toy._id}`}
                        style={{ display: "none" }}
                      ></Link>
                      <Button onClick={handleButtonClick}>View Details</Button>
                    </div>
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
