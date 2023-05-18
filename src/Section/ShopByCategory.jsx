import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myToy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  // Extract unique categories from toys
  const categories = [...new Set(toys.map((toy) => toy.selectedCategory))];

  // Filter toys based on selectedCategory
  const filteredToys = (selectedCategory) => {
    return toys.filter((toy) => toy.selectedCategory === selectedCategory);
  };

  // Extract unique subcategories for each category
  const getUniqueSubcategories = (selectedCategory) => {
    const subcategories = filteredToys(selectedCategory).map(
      (toy) => toy.selectedSubcategory
    );
    return [...new Set(subcategories)];
  };

  return (
    <Container>
      <h3 className="display-1 text-center mb-4 ">
            <strong>
            Shop By Category
            </strong>
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
          {categories.map((category, index) => (
            <Tab
              key={index}
              style={{ background: "white", borderRadius: "5px" }}
            >
              {category}
            </Tab>
          ))}
        </TabList>
        {categories.map((category, index) => (
          <TabPanel key={index} style={{ fontSize: "20px", margin: "20px" }}>
            <Tabs defaultIndex={0}>
              <TabList>
                {getUniqueSubcategories(category).map(
                  (subcategory, subIndex) => (
                    <Tab
                      key={subIndex}
                      style={{ background: "#f5e5f8", borderRadius: "5px" }}
                    >
                      {subcategory}
                    </Tab>
                  )
                )}
              </TabList>
              {getUniqueSubcategories(category).map((subcategory, subIndex) => (
                <TabPanel key={subIndex}>
                  {filteredToys(category).map((toy, toyIndex) => {
                    if (toy.selectedSubcategory === subcategory) {
                      return (
                        <div className="d-flex justify-content-between">
                          <img src={toy.photo} alt="" className="img-fluid w-50" />
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
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
                      );
                    }
                    return null;
                  })}
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default ShopByCategory;
