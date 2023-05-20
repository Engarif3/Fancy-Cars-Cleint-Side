import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ShopByCategory = () => {
  const linkRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

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
              <div className="d-flex justify-content-between" key={toyIndex}>
                <img src={toy.photo} alt="" className="img-fluid w-50" />
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-flex justify-content-center">
                      <div className="w-75 mb-2">
                        <Link
                          ref={linkRef}
                          to={`/allToys/${toy._id}`}
                          style={{ display: "none" }}
                        ></Link>
                        <Button onClick={handleButtonClick}>
                          View Details
                        </Button>
                      </div>
                    </div>
                    <p style={{ color: "green" }}>
                      Toy Name: {toy.toyName}
                      <br />
                      Rating: {toy.rating}
                      <br />
                      Price: {toy.price}
                      <br />
                      Seller: {toy.sellerName}
                      <br />
                      Details: {toy.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default ShopByCategory;
