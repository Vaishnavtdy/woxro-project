import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Typography } from '@mui/material'

function ProductCard(props) {
    console.log(props);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/GnDFpvqTPcCSaMLFdlam8RjBNaKLvupWrCgz9Xx3.jpg" />
      <Card.Body>
      <div
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                display: "flex",
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                name
                            </Typography>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                margin: "5px 0px 5px 0px",
                            }}
                        >
                            <Typography >working place</Typography>
                        </div>
                        <div>
                            <Typography
                                style={{ color: "red" }}
                            >rs 500</Typography>
                        </div>
                        <Button>Explore Now</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard