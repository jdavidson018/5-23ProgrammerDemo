import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainCard = ({ dog }) => (
  <div className="card">
    <div className="image">
      <Image src={dog.imgURL} className="Medium" />
    </div>
    <div className="content">
      <div className="header">{dog.Name}</div>
      <div className="meta">
        <span className="date">Joined in 2015</span>
      </div>
      <div className="description">{dog.description}</div>
    </div>
    <div className="extra content">
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </div>
    <div className="extra content">
      <Link to={`/dogs/${dog.id}`} className="ui button primary">
        Details
      </Link>
      <Link to={`/dogs/edit/${dog.id}`} className="ui button danger">
        Edit
      </Link>
      <Link to={`/dogs/delete/${dog.id}`} className="ui button">
        Delete
      </Link>
    </div>
  </div>
);

MainCard.propTypes = {
  identity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default MainCard;
