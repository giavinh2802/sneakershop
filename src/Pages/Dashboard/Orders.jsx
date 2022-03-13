import React, {useState} from "react";

import Table from "../../Components/Table/Table";

import customerList from "../../Assets/JsonData/customers-list.json";

import { Button, DropdownButton, Dropdown, Modal } from "react-bootstrap";

import AddOrders from "../../Components/Modal/AddOrders";

const customerTableHead = [
  "id",
  "time",
  "shipping address",
  "phone",
  "method",
  "total",
  "status",
  "action",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td><span className="status">Delivered</span></td>
    <td>
      <div className="icon__actions">
        <i class="bx bx-show-alt icon__actions-detail"></i>
        <i class="bx bx-trash icon__actions-delete"></i>
      </div>
    </td>
  </tr>
);

const Orders = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div>
      {/* Add Control */}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddOrders />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="page-header">
        <h2 className="page-header__text">orders</h2>
        <div className="topnav__search">
          <input type="text" placeholder="Search here..." />
          <i className="bx bx-search"></i>
        </div>
        <Button onClick={handleShow} className="page-header__button">
          <i className="bx bx-plus-medical page-header__button-icon"></i>
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

export default Orders;
