import React, { useState } from "react";

import { Link } from "react-router-dom";

import Table from "../../Components/Table/Table";

import "../../Assets/Styles/Customer.css";

import customerList from "../../Assets/JsonData/customers-list.json";

import { Button, Modal } from "react-bootstrap";

import DetailCustomer from "../../Pages/Dashboard/DetailCustomer";

import DeleteForm from '../../Components/Modal/DeleteForm'

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr className="actions" key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>
        <Link to="/detailcustomer">
          <i class="bx bx-show-alt icon__actions-detail"></i>
        </Link>
        <i class="bx bx-trash icon__actions-delete"></i>
      </td>
    </tr>
  );
};

const Customers = () => {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-header__text">customers</h2>
        <div className="topnav__search">
          <input type="text" placeholder="Search here..." />
          <i className="bx bx-search"></i>
        </div>
        <Button className="page-header__button">
          <i className="bx bx-plus-medical page-header__button-icon "></i>
          Add
        </Button>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
