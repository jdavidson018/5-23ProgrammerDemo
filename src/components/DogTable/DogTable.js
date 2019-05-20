import React from "react";
import { Link } from "react-router-dom";

class DogTable extends React.Component {
  componentDidMount() {}
  renderRows() {
    return this.props.dogs.map(dog => {
      return (
        <tr key={dog.id}>
          <td data-label="Id">{dog.id}</td>
          <td data-label="Name">{dog.name}</td>
          <td data-label="Breed">{dog.breed}</td>
          <td data-label="Info">
            <Link className="ui button" to={dog.info}>
              Info
            </Link>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default DogTable;
