import React from "react";
import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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

  const handleDetails= () =>{
    console.log("view setails")
  }




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
                {/* <td>{toy.selectedSubcategory}</td> */}
                <td>{toy.details}</td>
              
                <td>
                  <Button variant="primary" onClick={() => handleDetails(toy._id)}>View Details</Button>
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
