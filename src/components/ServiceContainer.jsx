import { Grid } from "@mui/material";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

function ServiceContainer({ data }) {
  console.log(data);
  return (
    <div>
      <Container className="mb-5 d-flex justify-content-center flex-column">
        <div>
          <div className="d-flex justify-content-between mt-2">
            <p>Commercial Shop</p>
            <span>Explore More</span>
          </div>
          <Grid container spacing={2} columns={10}>
            {data.map((item) => {
              if (JSON.parse(item.propertyType).id === 5) {
                return <ProductCard data={item} />;
              }
            })}
          </Grid>
        </div>

        <div>
          <div className="d-flex justify-content-between mt-2">
            <p>Commercial Office</p>
            <span>Explore More</span>
          </div>
          <Grid container spacing={2} columns={10}>
            {data.map((item) => {
              if (JSON.parse(item.propertyType).id === 6) {
                return <ProductCard data={item} />;
              }
            })}
          </Grid>
        </div>

        <div>
          <div className="d-flex justify-content-between mt-2">
            <p>Commercial Land</p>
            <span>Explore More</span>
          </div>
          <Grid container spacing={2} columns={10}>
            {data.map((item) => {
              if (JSON.parse(item.propertyType).id === 7) {
                return <ProductCard data={item} />;
              }
            })}
          </Grid>
        </div>

        <div>
          <div className="d-flex justify-content-between mt-2">
            <p>Commercial Building</p>
            <span>Explore More</span>
          </div>
          <Grid container spacing={2} columns={10}>
            {data.map((item) => {
              if (JSON.parse(item.propertyType).id === 8) {
                return <ProductCard data={item} />;
              }
            })}
          </Grid>
        </div>

        <div>
          <div className="d-flex justify-content-between mt-2">
            <p>Industrial Building</p>
            <span>Explore More</span>
          </div>
          <Grid container spacing={2} columns={10}>
            {data.map((item) => {
              if (JSON.parse(item.propertyType).id === 9) {
                return <ProductCard data={item} />;
              }
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default ServiceContainer;
