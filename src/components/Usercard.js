import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import Card from 'react-bootstrap/Card'
function Usercard(language, name) {
  console.log(name)
  return (
    <div className="container">
      <div className="row row-header justify-content-center">
        <div className="col-3 col-sm-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                {language.language}
                {name.name}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default Usercard;