import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Row } from "react-bootstrap";
function ProductCard({ data }) {
  let details = JSON.parse(data.details);
  let img = JSON.parse(data.images)[0];
  console.log(details);
  return (
    <>
      <Card style={{ width: "16rem" }} className="m-2">
        <Card.Img variant="top" src={img} style={{ height: "11rem" }} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{details.title}</Card.Title>
            <FavoriteBorderIcon />
          </div>
          <div className="d-flex">
            <LocationOnIcon style={{ opacity: ".7" }} />
            <Card.Text>{JSON.parse(data.location).city}</Card.Text>
          </div>
          <Card.Text className="text-danger mt-1">
            RS {details.price.rate}
            {details.price.type}
          </Card.Text>
          <Button
            variant="none"
            className="float-end pt-0"
            style={{ color: "blue", border: "none" }}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
