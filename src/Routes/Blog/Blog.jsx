import React from "react";
import { Container } from "react-bootstrap";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <Container className="text -center m-auto my-4">
      <div id="print-container">
        <h3 className="text-center text-decoration-underline mb-4">
          Questions & Answers
        </h3>
        <div>
          <h5>
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h5>
          <p className="ps-4">
            <b>Access Token:</b> An access token functions as evidence of
            authorization, generated when logging into an app or granting
            permission to an application. It acts as a digital ID card,
            permitting access to specific parts of the app or website. <br />{" "}
            <br />
            <b>Refresh Token:</b> A refresh token serves as a unique code that assists
            in acquiring a new access token upon the expiration of the current
            one. It acts like a key, enabling the renewal of authorization
            without repeating the entire login process. This feature ensures the
            continuity of your session or extends your access to the app or
            website. <br /> <br />

            <b>Storage on the client-side:</b> To ensure accessibility for authorized
            requests, it is recommended to securely store the access token in
            the app or website's memory on the client-side. It is crucial,
            however, to avoid storing refresh tokens on the client-side due to
            their longer lifespan and the associated security risks. Instead,
            refresh tokens should be securely stored on the server-side to
            prevent unauthorized access.
          </p>
        </div>

        <div>
          <h5>2. Compare SQL and NoSQL databases? </h5> <br />

          <div className="ps-4">
            <h6><b className="text-decoration-underline">SQL Databases:</b></h6> 
            <b>Structure:</b> SQL databases use a structured schema, meaning data is
            organized into tables with predefined columns and rows. <br />{" "}
            <br />
            <b>Relationships:</b> SQL databases are great for managing relationships
            between different tables through keys, ensuring data integrity and
            consistency. <br /> <br />
            <b>Query Language:</b> They use Structured Query Language (SQL) to interact
            with the data, allowing for powerful querying and complex
            operations.
            <br /> <br />
            <b>Scalability:</b> SQL databases generally scale vertically by increasing
            the hardware resources of a single server. <br /> <br /> <br />

            <h6><b className="text-decoration-underline">NoSQL Databases:</b></h6> 
            <b>Structure:</b> NoSQL databases are schema-less, meaning they can store
            unstructured and semi-structured data without a predefined schema.{" "}
            <br /> <br />
            <b>Flexibility:</b> They provide flexibility in storing and handling
            various types of data, such as documents, key-value pairs, graphs,
            and more. <br /> <br />
            <b>Scalability:</b> NoSQL databases are designed to scale horizontally by
            adding more servers to distribute the data and workload. <br />{" "}
            <br />
            <b>Querying:</b> NoSQL databases often have simpler query capabilities
            compared to SQL databases, with a focus on high-performance
            retrieval of specific data.{" "}
          </div>
        </div>

        <div className="mt-4">
          <h5>3. What is express js? What is Next JS?</h5>
          <p className="ps-4">
            <b>Express.js</b> is a web application framework for Node.js that
            simplifies the process of building web applications and APIs. It
            provides a set of tools and features to handle routing, middleware,
            and request/response handling. Express.js allows developers to
            create server-side applications efficiently and easily manage routes
            and handle HTTP requests and responses. <br /> <br />
            <b>Next.js</b> , on the other hand, is a framework built on top of React.js that enables server-side
            rendering (SSR) and static site generation (SSG) for React
            applications. It provides a powerful development environment with
            features like automatic code splitting, routing, and server-side
            rendering, allowing developers to build fast and optimized web
            applications. Next.js simplifies the process of building React
            applications by providing a framework that takes care of routing and
            server-side rendering, making it easier to create performant and
            SEO-friendly websites. <br /> <br />
            In simple terms, Express.js is a framework for building server-side applications and APIs using Node.js, while Next.js is a framework that extends React.js and provides additional
            features like server-side rendering and routing to create fast and
            optimized web applications.
          </p>
        </div>

        <div>
          <h5>4. What is MongoDB aggregate and how does it work</h5>
          <p className="ps-4">
          <b>MongoDB aggregate</b> is a powerful feature that allows you to perform advanced data processing operations on collections of documents in MongoDB. <br /> <br /> 
          
          It works by using a pipeline of stages, where each stage applies a specific operation to the input documents and passes the results to the next stage. This enables you to perform tasks like grouping, filtering, sorting, and transforming data in a flexible and efficient manner. Overall, MongoDB aggregate helps you analyze and summarize your data in meaningful ways.
          </p>
          
        </div>
      </div>
    </Container>
  );
};

export default Blog;
