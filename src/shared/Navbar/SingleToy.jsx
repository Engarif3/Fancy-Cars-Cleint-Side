import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const SingleToy = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch(`https://fancy-car.vercel.app/myToy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      })
      .catch((error) => {
        console.error("Error fetching toy:", error);
      });
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <td>{toy.toyName}</td>
    //   <td>{toy.sellerName}</td>
    //   <td>{toy.sellerEmail}</td>
    //   <td>{toy.price}</td>
    //   <td>{toy.rating}</td>
    //   <td>{toy.quantity}</td>
    //   <td>{toy.selectedCategory}</td>
    //   <td>{toy.details}</td>
    // </div>
    <div
      className=" "
      style={{ height: "500px", backgroundColor: "rgb(47, 79, 79)" }}
    >
      <Container>
        <div className="d-flex justify-content-between  text-white align-items-center ">
          <div className="w-50 p-5">
            <h4 className="text-center fst-italic text-danger ">
              {toy.toyName}
            </h4>
           
            <p>
              {toy.details}
            </p>
            <p>
              <span className="fw-bold">Category :</span> {toy.selectedCategory}
            </p>
            
            <p>
              <span className="fw-bold">Seller Name :</span> {toy.sellerName}
            </p>
            <p>
              <span className="fw-bold">Seller Email :</span> {toy.sellerEmail}
            </p>
            <p>
              <span className="fw-bold">Price :</span> ${toy.price} 
            </p>
            <p>
              <span className="fw-bold">Quantity :</span> {toy.quantity} 
            </p>

            <div className="d-flex  align-items-center">
              <p><span className="fw-bold">Rating :</span></p>
              <Rating
                style={{ maxWidth: 100 }}
                value={toy.rating}
                readOnly
                className="pb-3"
              />
              <p>{toy.rating}</p>
            </div>
          </div>

          <div
            height={400}
            offset={50}
            className="d-flex justify-content-center align-items-center mr-4"
            style={{ height: "400px" }}
          >
            <img
              src={toy.photo}
              alt=""
              className="w-100 h-100 mt-5 rounded-4 mr-4"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleToy;
