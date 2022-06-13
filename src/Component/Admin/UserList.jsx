import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux"
import { useNavigate } from "react-router";
import { userList,userDelete, userEdit } from "../../Redux/Datareducer";
import Header from "./Header";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import{ EditFilled,DeleteFilled ,FormOutlined}from "@ant-design/icons"

const UserList = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const PostList = useSelector(state => state?.User?.PostList?.posts)
  const mess  =useSelector(state => state?.User?.delete)
  console.log("sata",PostList)
  
  const handleCreate=()=>{
   navigate("/usercreate")
  }
  const handleDelete=(id)=>{
   dispatch(userDelete(id))

  }
  const handleShow=(id)=>{
    navigate(`/usercreate/${id}`);
    dispatch(userEdit(id))

  }

  useEffect(() => {
    dispatch(userList());
    if(mess){
      dispatch(userList());
    }
  },[mess]);
  return (
    <div>
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
          <Wrapper />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Basic Table</h3>
                  <p className="text-muted">
                    Add class <code>.table</code>
                  </p>
                  <div className="table-responsive">
                    {PostList ? (
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th className="border-top-0">Id</th>
                            <th className="border-top-0">Title</th>
                            <th className="border-top-0">Description</th>
                            <th className="border-top-0">User_Id</th>
                            <th className="border-top-0">Created_At</th>
                            <th className="border-top-0">Updated_At</th>
                            <th className="border-top-0" colSpan={3}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        
                            {PostList?.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{item.id}</td>
                                  <td>{item.title}</td>
                                  <td>{item.description}</td>
                                  <td>{item.user_id}</td>
                                  <td>{item.created_at}</td>
                                  <td>{item.updated_at}</td>
                                  <td><button onClick={()=>handleDelete(item.id)}><DeleteFilled /></button></td>
                                  <td><button onClick={()=>handleShow(item.id)}><EditFilled/></button></td>
                                  <td><button onClick={()=>handleCreate()}><FormOutlined /></button></td>
                                </tr>
                              );
                            })}
                         
                        </tbody>
                      </table>
                    ) : (
                      <h3>not Record</h3>
                    )}
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
    </div>
  );
};

export default UserList;
