import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle} from 'react-icons/fa';
import useTitle from "../Hooks/useTitle";


const Login = () => {

  useTitle("Login");

  const [error, setError] = useState();
  const { signIn, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
      event.preventDefault();
      setError('');
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const loggedUser = result.user;
              form.reset();
              navigate(from, { replace: true })
          })
          .catch(error => {
              setError("User's email address or Password doesn't match");
          })
  }

  //Google Login
          const handleGoogleLogin = () =>{
              googleSignIn()
              .then(result => {
                const loggedUser = result.user;
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
          }


  return (
    <div>
  
      <Container>
      <div className=' w-50 border m-auto mt-4 rounded bg-light'>
      <h4 className="text-center mt-4">Please Login.</h4>
        <Form className="w-50  m-auto p-4" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <br />
          <Form.Text className="text-danger">
            Don't Have An Account? <Link to={"/register"}>Register</Link>
          </Form.Text>
          <Form.Text className="tex-success">
           
          </Form.Text>{" "}
          <Form.Text className="text-danger">
            
          </Form.Text>
          
        </Form>
        <div className="d-flex justify-content-center align-items-center gap-2 mb-5">
              <Button className=" mt-2 " variant="outline-primary" onClick={handleGoogleLogin}> <FaGoogle/> <span className="px-2">Login With Google</span> </Button>{" "}
          
         </div>
    </div>
    
      </Container>
    </div>
  );
};

export default Login;
