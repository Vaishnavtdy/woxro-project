import React from 'react'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'

function Banner2() {
  return (
    <div>
         <Container>
            <Row>
                <Col md={8}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        interval={5000}
                        className="mb-5 bg-white shadow rounded"
                    >
                        <Carousel.Item>
                            <Image
                                src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png"
                                alt="Furniture Ad"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png"
                                alt="Hoomy Ad"
                                fluid
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={4}>
                    <Carousel
                        controls={false}
                        indicators={false}
                        className="mb-5 bg-white shadow rounded"
                    >
                        <Carousel.Item>
                            <Image src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png" alt="ad2" fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner2