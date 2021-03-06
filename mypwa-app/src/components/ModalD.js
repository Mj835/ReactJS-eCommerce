import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalD = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ border: "0px" }} closeButton></Modal.Header>
        <Modal.Body>
          <div className="thank-you-pop">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3736/3736012.svg?token=exp=1614881576~hmac=2a3957fc26a5718a0f1a8a61d27b6634"
              alt=""
            />
            <h1>Congratulations</h1>
            <p>Your address has been whitelisted 🥳</p>
            {/* <h3 className="cupon-pop">
              Your Id: <span>12345</span>
            </h3> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalD;
