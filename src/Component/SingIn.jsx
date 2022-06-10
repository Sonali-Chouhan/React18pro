import React, { useEffect } from "react";
import { get, useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getIn } from "../Redux/Datareducer";


const Singin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Logi} = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    
    dispatch(getIn(data));
     toast.success(" 🚀Successfully SingIn");
  };

  useEffect(() => {
    const data=Logi?.message;
    if (data) {
      window.location.href = "/dashboard";
    }
  }, [Logi]);
  
  return (
    
    <div className="main">
      <Form onSubmit={handleSubmit(handleLogin)}>
        <div className="field">
          <h3 className="heading">Login</h3>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter User Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
            />
            <p className="error">
              {errors.email?.type === "required" &&
                "Email Address is required"}
            </p>
            <p className="error">
              {errors.email?.type === "pattern" && "must add Valid email"}
            </p>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter User Password"
              {...register("password", { required: true })}
            />
            <p className="error">
              {errors.password?.type === "required" && "Password  required"}
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className="button" type="submit">
            Submit
          </Button>
        </div>
      </Form>
 </div>  
  
  );
};

export default Singin;
