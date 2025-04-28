import React from "react";
import Card from "react-bootstrap/Card";

const CardItem = ({ item }) => {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.images} />
        <Card.Body>
          <Card.Title>{item.brand}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>${item.price}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default CardItem;
