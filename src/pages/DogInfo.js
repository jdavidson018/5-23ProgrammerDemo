import React from "react";
import { connect } from "react-redux";
import { fetchDog } from "../actions";
class DogInfo extends React.Component {
  componentDidMount() {
    this.props.fetchDog(this.props.match.params.id);
  }

  render() {
    if (!this.props.dog) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img
          ref={this.props.dog.imgURL}
          alt={this.props.dog.description}
          src={this.props.dog.imgURL}
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
  { fetchDog }
)(DogInfo);
