import {Card, Button, Form} from 'react-bootstrap'
import React from 'react'

function Banner() {
  return (
    <>
        <div className="main-banner">
            <img style={{width:'100vw', height:'80vh'}} src="https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?w=1060&t=st=1661027461~exp=1661028061~hmac=af91865d6394241b1413e056f073535b764df59727c307666a30998158c8192c" alt="image" />
        <Card  style={{width: '22rem', position:"absolute", top:'15%', left:'5%'}}>
      <Card.Body>
        <Card.Title className='h1' style={{fontSize:"28px"}}>Choose from 25,00+ Spaces for your Business</Card.Title>
        <Card.Text>
        Get inspired and find your perfect place
        </Card.Text>
        <Form className='flex'>
        <Form.Select aria-label="Default select example " className="p-2 mb-2">
      <option>Looking for</option>
      <option value="1">Commercial Shop</option>
      <option value="2">Commercial Office</option>
      <option value="3">Commercial Land</option>
    </Form.Select>
    <Form.Select aria-label="Default select example" className="p-2 mb-2">
      <option>Select city</option>
      <option value="1">Delhi</option>
      <option value="2">Chennai</option>
      <option value="3">Kochi</option>
    </Form.Select>
        <Button variant="primary" style={{width:"100%"}}>Search</Button>
        </Form>
      </Card.Body>            
        </Card>
        </div>
    </>
  )
}

export default Banner