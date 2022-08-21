import { Grid } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ServiceContainer({ data }) {
  console.log(data);
  return (
    <div>
      <Container className="mb-5">
        <div className="d-flex justify-content-between mt-2">
          <p>Commercial Shop</p>
          <span>Explore More</span>
        </div>
        <Grid
          container
          spacing={2}
          columns={10}
          className="d-flex justify-content-evenly pt-2"
        >
          {/* {
                    data.map((item)=>{
                        if(item.propertyType[1].id === 5){
                            return <ProductCard data={item} />
                        }
                    })
                } */}
          {/* The Api is not returning value as an object so i can't iterate through each item */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container>
    </div>
  );
}

export default ServiceContainer;
