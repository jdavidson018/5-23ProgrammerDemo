import React from "react";
import { connect } from "react-redux";
import { fetchDogs } from "../actions";
import MainCard from "../components/MainCard/MainCard";
class DogList extends React.Component {
  componentDidMount() {
    this.props.fetchDogs();
  }

  renderList() {
    return this.props.dogs.map(dog => {
      return <MainCard key={dog.id} dog={dog} />;
    });
  }

  render() {
    return <div className="ui link cards">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    dogs: Object.values(state.dogs)
  };
};

export default connect(
  mapStateToProps,
  { fetchDogs }
)(DogList);
