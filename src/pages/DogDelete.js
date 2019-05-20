import React from "react";
import { fetchDog, deleteDog } from "../actions";
import { connect } from "react-redux";
import history from "../history";
import Modal from "../components/Modal/Modal";

class DogDelete extends React.Component {
  componentDidMount() {
    this.props.fetchDog(this.props.match.params.id);
  }
  renderActions() {
    return (
      <>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteDog(this.props.match.params.id)}
        >
          Delete
        </button>

        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
      </>
    );
  }

  renderContent() {
    if (!this.props.dog) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delte the Dog with name: ${
      this.props.dog.Name
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { dog: state.dogs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchDog, deleteDog }
)(DogDelete);
