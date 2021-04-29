import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditTour from "./EditTour";
const TourCard = ({tour, deletePer, editTour }) => {
  return (<div style={{ margin: "25px" }}>
      {" "}
      <div>
        <Link to={`/info/${tour.id}`}>
          <img  src={tour.image} />
          <p>{tour.name}</p>
          <p>{tour.price}</p>
          <p>{tour.info} </p>
        </Link>
      </div>
      {/* <Card.Content extra>
        <div className="ui two buttons">
          <EditTour editTour={editTour} tour={tour} />
          <Button onClick={() => deletePer(tour.id)} basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content> */}
    </div>
  );
};

export default TourCard;
