import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://fancy-car.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleButtonClick = (toyId) => {
    if (!user) {
      Swal.fire({
        title: "Please login first to view details",
        icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // You can perform any desired action here when the user is not logged in
        }
      });
    } else {
      // You can perform any desired action here when the user is logged in
    }
  };

  // Extract unique categories from toys
  const categories = [...new Set(toys.map((toy) => toy.selectedCategory))];

  // Filter toys based on selectedCategory
  const filteredToys = (selectedCategory) => {
    return toys.filter((toy) => toy.selectedCategory === selectedCategory);
  };

  // Filter out empty categories and categories that were not provided
  const nonEmptyCategories = categories.filter(
    (category) => category && filteredToys(category).length > 0
  );

  return (
    <Container>
      <h3 className="display-1 text-center mb-4 ">
        <strong>Shop By Category</strong>
      </h3>
      <Tabs>
        <TabList
          style={{
            fontSize: "20px",
            margin: "20px",
            color: "#1616b7",
            borderRadius: "10px",
          }}
        >
          {nonEmptyCategories.map((category, index) => (
            <Tab
              key={index}
              style={{ background: "white", borderRadius: "5px" }}
            >
              {category}
            </Tab>
          ))}
        </TabList>
        {nonEmptyCategories.map((category, index) => (
          <TabPanel key={index} style={{ fontSize: "20px", margin: "20px" }}>
            {filteredToys(category).map((toy, toyIndex) => (
              <Container key={toyIndex}>
                <div className="d-md-flex d-lg-flex justify-content-between mb-2 w-100">
                  <img
                    src={toy.photo}
                    alt=""
                    className="img-fluid w-75 rounded-2 p-2"
                  />

                  <div className=" w-100">
                    <div>
                      <div>
                        <div className="p-5" style={{ color: "black" }}>
                          <h4 className="fw-bold">{toy.toyName}</h4>

                          <div className="d-flex justify-content-start  align-items-center m-0">
                            <p className="fw-bold">Rating:</p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy.rating}
                              readOnly
                              className="pb-3"
                            />{" "}
                            &nbsp;
                            <p>{toy.rating}</p>
                          </div>
                          <span className="fw-bold">Price:</span> $ {toy.price}
                          <br />
                          {toy.details}
                          <div className="d-flex justify-content-center">
                            <div className="w-100 mt-2">
                              <Link to={`/allToys/${toy._id}`}>
                                <Button
                                  onClick={() => handleButtonClick(toy._id)}
                                >
                                  View Details
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default ShopByCategory;
