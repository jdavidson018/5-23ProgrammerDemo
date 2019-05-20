import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export const TestModal = () => {
  return (
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete this dog?</div>
        <div className="actions">
          <button className="ui button negative">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
