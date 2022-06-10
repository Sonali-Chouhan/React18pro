import React from 'react'
import {Link} from "react-router-dom"
const Wrapper = () => {
  return (
    <div>
      <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Profile page</h4>
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <div className="d-md-flex">
                <ol className="breadcrumb ms-auto">
                  <li>
                    <a href="#" className="fw-normal">
                      Dashboard
                    </a>
                  </li>
                </ol>
                <Link
                 to="/dashboard"
                  target="_blank"
                  className="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white"
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Wrapper