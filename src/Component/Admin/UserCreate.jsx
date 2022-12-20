import React, { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { userCreate, userUpdate } from "../../Redux/Datareducer";
import {
  PlusOutlined,
  CheckOutlined,
  CloseSquareOutlined,
  
} from "@ant-design/icons";
const userId = localStorage.getItem("User_Id");

const UserCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // const Creates = useSelector((state) => state.?User.Create);
  const isShow=useSelector((state)=>state?.User?.Edit?.post)
  console.log("isShow",isShow)

  const submit = (data) => {
    data["user_id"] = userId;
    if(id){
       dispatch(userUpdate(data))
    }
    else{
      dispatch(userCreate(data));
    }
   
    navigate("/userlist");
    
  };
  const handleCancel = () => {
    window.location.href = "/usercreate";
  };
  useEffect(() => {
    const items = isShow;
    if (items) {
      setValue("title", items.title);
      setValue("description", items.description);
      setValue("id", items.id)
    }
  }, [isShow]);

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <Header />
      <Navbar />
      <div className="page-wrapper">
        <div className="container-fluid">
          <Wrapper />
          <div className="row">
            <div className="col-lg-4 col-xlg-3 col-md-12">
              <div className="white-box">
                <div className="user-bg">
                  <img
                    width="100%"
                    alt="user"
                    src="../plugins/images/large/img1.jpg"
                  />
                  <div className="overlay-box">
                    <div className="user-content">
                    
                        <img
                          src="../plugins/images/users/genu.jpg"
                          className="thumb-lg img-circle"
                          alt="img"
                        />
                     
                      <h4 className="text-white mt-2">User Name</h4>
                      <h5 className="text-white mt-2">info@myadmin.com</h5>
                    </div>
                  </div>
                </div>
                <div className="user-btm-box mt-5 d-md-flex">
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>258</h1>
                  </div>
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>125</h1>
                  </div>
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>556</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xlg-9 col-md-12">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-horizontal form-material"
                    onSubmit={handleSubmit(submit)}
                  >
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Full Name</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Titile"
                          {...register("title", { required: true })}
                        />
                        {errors.name && <p>This is required.</p>}
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Phone No</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="text"
                          name="description"
                          placeholder="Enter User Name"
                          {...register("description", { required: true })}
                        />
                        {errors.name && <p>This is required.</p>}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="col-sm-12">
                        {id ? (
                          <span>
                            <button type="submit">
                              <CheckOutlined />
                            </button>{" "}
                            <button type="submit" onClick={handleCancel}>
                              <CloseSquareOutlined />
                            </button>
                          </span>
                        ) : (
                          <button type="submit" className="btn btn-success">
                            AddContext
                            <PlusOutlined />
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center">
          2021 © Ample Admin brought to you by
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>
      </div>
    </div>
  );
};

export default UserCreate;
