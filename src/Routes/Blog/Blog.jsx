import React from "react";
import {Container } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { FaPrint } from "react-icons/fa";
import './Blog.css'

const Blog = () => {
  const printRef = React.useRef();
  return (
    <Container className="text -center m-auto my-4">
      <div id="print-container" ref={printRef}>
        <h3 className="text-center text-decoration-underline mb-4">
          Questions & Answers
        </h3>
        <div>
          <h5>
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h5>
          <p className="ps-4">
            A controlled component is a component that is controlled by the state of React and an uncontrolled component is a component that is maintained or controlled by its own internal state.
          </p>
        </div>

        <div>
          <h5>2. How to validate React props using PropTypes. </h5>
          <div className="ps-4">
            <p>React PropTypes validators: </p>
            <p className="ps-4">
              <li>PropTypes.any: The prop can be of any data type.</li>
              <li>PropTypes.bool : The prop should be a Boolean. </li>
              <li>PropTypes.number: The prop should be a number. </li>
              <li>PropTypes.string : The prop should be a string.</li>
              <li>PropTypes.func : The prop should be a function.</li>
              <li>PropTypes.array : The prop should be an array.</li>
            </p>
          </div>
        </div>

        <div>
          <h5>3. Tell us the difference between nodejs and express js.</h5>
          <p className="ps-4">
            NodeJS is the package that provides the JavaScript run-time
            environment.On the other hand, Express js is a framework that works on top of
            NodeJS and helps users to handle requests and responses.
          </p>
        </div>

        <div>
          <h5>
            4. What is a custom hook, and why will you create a custom hook?
          </h5>
          <p className="ps-4">
            {" "}
            In react, a custom hook is user-defined function that is prefixed
            with the “use” keyword.
          </p>
          <p className="ps-4">
            It can be reused easily, which makes the code cleaner and reduces
            the time to write the code. It also enhances the rendering speed of
            the code as a custom hook does not need to be rendered again and
            again while rendering the whole code.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2 mt-5 ">
        <span className="text-danger">Download or Print PDF: </span> 
      
        <ReactToPrint
          trigger={() => <FaPrint className="print-icon" style={{width:"2rem", height:"2rem"}}></FaPrint> }
          content={() => printRef.current}
        />
      </div>
    </Container>
  );
};


export default Blog;
