import React, { useState } from "react";
import { Button, Header, image, Modal, Form } from "semantic-ui-react";

function EditTour({ tour, editTour }) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState(tour.name);
  const [price, setPrice] = useState(tour.price);
  const [image, setImage] = useState(tour.image);
  const [info, setInfo] = useState(tour.info);

  const ediit = () => {
    editTour(tour.id, { name, price, info, image });

    setOpen(false);
  };
  const closee = () => {
    setInfo(tour.info);
    setImage(tour.image);
    setPrice(tour.price);
    setName(tour.name);
    setOpen(false);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="green">
          Edit
        </Button>
      }
    >
      <Modal.Header>Add New Tour</Modal.Header>
      <Modal.Content image>
        <Modal.Info>
          <Form>
            {" "}
            <Form.Field>
              <label> Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
              />
            </Form.Field>
            <Form.Field>
              <label>image</label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="image"
              />
            </Form.Field>
            <Form.Field>
              <label>info</label>
              <input
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder="info"
              />
            </Form.Field>
          </Form>
        </Modal.Info>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={closee}>
          Nope
        </Button>
        <Button
          content="Edit"
          labelPosition="right"
          icon="checkmark"
          onClick={ediit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditTour;
