import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
// import logo from "../../assets/car-logo.png"
import logo1 from "../../assets/car-logo1.png"

const Navigationbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName ? user.displayName : user.email}
    </Tooltip>
  );

  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          // bg="black"
          variant="light"
          style={{ position: "relative", top: 0 }}
        >
          <Container>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="bg-white"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div>
              <img className="" style={{width:"80px"}} src={logo1} alt="" />
              <h5 className="ms-5 text-danger fw-bold fst-italic mb-md-2 mb-lg-2">
                Fancy-Cars
              </h5>
              </div>
              
              <Nav className="mx-auto d-flex align-items-center gap-md-4">
                <NavLink
                  className="nav-link text-decoration-none text-black"
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link text-decoration-none text-black"
                  to={"/blog"}
                >
                  All Toys
                </NavLink>
                <NavLink
                  className="nav-link text-decoration-none text-black"
                  to={"/myToys"}
                >
                  My Toys
                </NavLink>
                <NavLink
                  className="nav-link text-decoration-none text-black"
                  to={"/addToy"}
                >
                  Add A Toy
                </NavLink>
                <NavLink
                  className="nav-link text-decoration-none text-black"
                  to={"/blog"}
                >
                  Blogs
                </NavLink>
              </Nav>

              <Nav className="d-flex  align-items-center gap-2">
                {user && (
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      className="d-flex justify-content-center align-items-center rounded-circle m-0 p-0  "
                      variant="primary"
                    >
                      {/* <FaUserCircle
                        style={{ fontSize: "2.5rem" }}
                        className="m-0 p-0"
                      ></FaUserCircle> */}
                      <img
                        src={user.photoURL}
                        alt=""
                        style={{ width: "2.5rem" }}
                        className="m-0 p-0 rounded-circle"
                      />
                    </Button>
                  </OverlayTrigger>
                )}

                {user ? (
                  <Button variant="primary" onClick={handleLogOut}>
                    Logout
                  </Button>
                ) : (
                  <Link to={"/login"}>
                    <Button variant="primary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .text-center {
              text-align: center !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navigationbar;
