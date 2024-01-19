import React from "react";
import "./../../assets/style/Add.scss";
import CustomizedTables from "../../components/AddTable";
import AddForm from "../../components/AddForm";

function Add() {
  return (
    <>
      <section className="headerr">
        <div className="container">
          <h1>Manage data</h1>
        </div>
      </section>

      <section className="detail">
        <div className="container">
          <CustomizedTables />
        </div>
      </section>

      <section className="addProduct">
        <div className="container">
          <AddForm />
        </div>
      </section>
    </>
  );
}

export default Add;
