import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import Card from 'react-bootstrap/Card'
function Usercard(language) {
  return (
    <div>
      <h1>Usercard</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <div>{language.language}</div>
    </div>
  );
}


export default Usercard;