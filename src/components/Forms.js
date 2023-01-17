import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PostApiAction } from "../redux/action/actions";
const Forms = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();

  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();

    const finalData = {
      name: name,
      email: email,
      phone: phone,
      country: country,
    };
    dispatch(PostApiAction(finalData));
  };

  return (
    <div>
      <form className="form-card">
        <h3 className="heading">Insert The User</h3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              onChange={(e) => {
                nameHandler(e);
              }}
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              onChange={(e) => {
                emailHandler(e);
              }}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              onChange={(e) => {
                phoneHandler(e);
              }}
              placeholder="Phone"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry">Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              onChange={(e) => {
                countryHandler(e);
              }}
              placeholder="Country"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            clickHandler(e);
          }}
          className="btn btn-primary"
        >
          Insert Data
        </button>
      </form>
      <hr></hr>
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "#ffff", textTransform: "none" }}
      >
        <Link
          to="/"
          style={{
            color: "#ffff",
            fontFamily: "cursive",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          To Read The Data
        </Link>
      </Button>
    </div>
  );
};

export default Forms;
