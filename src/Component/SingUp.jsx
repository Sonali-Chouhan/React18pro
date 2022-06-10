import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRegi } from "../Redux/Datareducer";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { Regi, loading } = useSelector((state) => state.User);
  console.log("Posts", Regi);

  const handleRegistration = (data) => {
    dispatch(getRegi(data));
  };
  useEffect(() => {
    const Data1 = Regi?.message;
    const Data2 = Regi?.errors;
    if (Data1) {
      toast.info("User Registered successfully :-)");
      window.location.href = "/singin";
    }
    if (Data2) {
      toast.error("400:-)Email has already been taken");
    }
    if(loading){
      toast.info("Loading .........");
    }
  }, [Regi,loading]);
  return (
    <div>
      <div className="main">
        <Form onSubmit={handleSubmit(handleRegistration)}>
          <div className="fields">
            <h3 className="headings">Registration</h3>
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

            <Form.Group className="mb-4">
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

            <Form.Group className="mb-4">
              <Form.Label>Confirmation Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirmation Password"
                {...register("password_confirmation", { required: true })}
              />
              <p className="error">
                {errors.password?.type === "required" && "Password  required"}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="buttons" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;
