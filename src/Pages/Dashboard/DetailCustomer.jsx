import React, { useState } from "react";

import Table from "../../Components/Table/Table";

import "../../Assets/Styles/Customer.css";

import customerList from "../../Assets/JsonData/customers-list.json";

import { Button, Modal, Form, Col } from "react-bootstrap";

import AddCustomers from "../../Components/Modal/AddCustomers";
const customerTableHead = [
  "order id",
  "time",
  "shipping",
  "phone",
  "method",
  "total orders",
  "status",
  "actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_orders}</td>
      <td><span className="status">Delivered</span></td>
      <td>
        <Form.Group className="group-actions mb-3" as={Col} controlId="formGridState">
          <Form.Select defaultValue="Processing">
          <option>Processing</option>
          <option>Delivered</option>
          <option>Pending</option>
          </Form.Select>
        </Form.Group>
      </td>
    </tr>
  );
};

const DetailCustomer = () => {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-header__text">Detail Customer</h2>
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

export default DetailCustomer;
