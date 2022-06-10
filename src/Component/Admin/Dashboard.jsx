import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Areachart from "./Mychart";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

const Deshboard = () => {
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
        <Wrapper />

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Total Visit</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-success">659</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Total Page Views</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash2">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-purple">869</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Unique Visitor</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash3">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-info">911</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="white-box">
                <h3 className="box-title">Products Yearly Sales</h3>
                <div className="d-md-flex">
                  <ul className="list-inline d-flex ms-auto">
                    <li className="ps-3">
                      <h5>
                        <i className="fa fa-circle me-1 text-info"></i>Mac
                      </h5>
                    </li>
                    <li className="ps-3">
                      <h5>
                        <i className="fa fa-circle me-1 text-inverse"></i>
                        Windows
                      </h5>
                    </li>
                  </ul>
                </div>

                <Areachart />
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

export default Deshboard;
