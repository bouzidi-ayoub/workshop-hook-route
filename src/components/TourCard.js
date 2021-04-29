import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditTour from "./EditTour";
const TourCard = ({tour, deletePer, editTour }) => {
  return (<Card style={{ margin: "25px" }}>
      {" "}
      <Card.Content>
        {/* <Link to={`/info/${tour.id}`}> */}
          <Image floated="right" size="mini" src={tour.image} />
          <Card.Header>{tour.name}</Card.Header>
          <Card.Meta>{tour.price}</Card.Meta>
          <Card.Info>{tour.info} </Card.Info>
        {/* </Link> */}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <EditTour editTour={editTour} tour={tour} />
          <Button onClick={() => deletePer(tour.id)} basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TourCard;
