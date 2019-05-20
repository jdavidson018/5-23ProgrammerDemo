import React from "react";
import DogForm from "./DogForm";
import { connect } from "react-redux";
import { createDog } from "../actions";

class DogCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createDog(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a dog</h3>
        <DogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createDog }
)(DogCreate);
