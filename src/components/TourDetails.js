import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const PersoDetails = (props) => {
  const tourFounded = props.tours.find(
    (tour) => tour.id == props.match.params.idTour
  );
  return (
    <>
    {
      console.log(tourFounded)
    }
      <Link to="/tours">
        {" "}
        <Button secondary>return to list </Button>
      </Link>
<div>
<img  src={tourFounded.image} />
          <p>{tourFounded.name}</p>
          <p>{tourFounded.price}</p>
          <p>{tourFounded.info} </p>
</div>
      {/* <Card>
        {console.log(tourFounded)}
        <Image src={tourFounded.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{tourFounded.name}</Card.Header>
          <Card.Meta>
            <span className="date"> {tourFounded.price}</span>
          </Card.Meta>
          <Card.Info>{tourFounded.info}</Card.Info>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
          
          </a>
        </Card.Content>
      </Card> */}
    </>
  );
};

export default PersoDetails;
