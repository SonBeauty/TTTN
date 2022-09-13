import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          //   src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          src="https://img.freepik.com/free-photo/attractive-woman-with-shop-bags-yellow-background_185193-69051.jpg?w=2000"
          className="card-img"
          alt="Background"
          height="700px"
        />
        <div className="card-img-overlay d-flex flex-coloumn ">
          <div className="container justify-content-center">
            <div className="position-absolute top-50">
              <h5 className="card-title display-3 fw-bolder">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ON THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
