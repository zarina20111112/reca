import React from "react";

const Main = () => {
  return (
    <div className="main contanier">
      <h1>How the app works</h1>
      <section className="one">
        <div>
          <img src="imges/img2.svg" alt="" />
        </div>
        <div className="left">
          <p className="p2">Create an account</p>
          <h3 className="rh3">
            Create/login to an existing account to get started
          </h3>
          <p className="p3">
            An account is created with your email and a desired password
          </p>
        </div>
      </section>
      <section className="one">
        <div className="left2">
          <p className="p2">Checkout</p>
          <h3 className="rh3">
            When you done check out and get it delivered.{" "}
          </h3>
          <p className="p3">
            When you done check out and get it delivered with ease.{" "}
          </p>
        </div>
        <div>
          <img src="imges/img3.png" alt="" />
        </div>
      </section>
       <section className="one">
        <div>
          <img src="imges/img4.png" alt="" />
        </div>
        <div className="left">
          <p className="p2">Create an account</p>
          <h3 className="rh3">
            Create/login to an existing account to get started
          </h3>
          <p className="p3">
            An account is created with your email and a desired password
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
