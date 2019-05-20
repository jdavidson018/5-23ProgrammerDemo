import React from "react";
import _ from "lodash";
import DogForm from "./DogForm";
import { connect } from "react-redux";
import { editDog, fetchDog } from "../actions";

class DogUpdate extends React.Component {
  componentDidMount() {
    this.props.fetchDog(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editDog(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.dog) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a dog</h3>
        <DogForm
          initialValues={_.pick(
            this.props.dog,
            "Name",
            "id",
            "description",
            "imgURL"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { dog: state.dogs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editDog, fetchDog }
)(DogUpdate);
