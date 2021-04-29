import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const AddTour = ({ addPer }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");
  const add = () => {
    addPer({ id: Date.now(), name, price, image, info });
  };
  return (
    <Form>
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

      <Link to="/tours">
        {" "}
        <Button onClick={add} primary>
          Add Tour
        </Button>
      </Link>
    </Form>
  );
};
export default AddTour;
