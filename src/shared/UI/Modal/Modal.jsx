import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop
        showBackDrop={props.showModal}
        closeSomething={props.closeModalClick}
      />
      <div className={"shop-modal fade show"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn text-danger"
                onClick={props.closeModalClick}
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className={"pt-3"}>{props.children}</div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  closeModalClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Modal;
