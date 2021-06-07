import React from 'react';
import { Jumbotron } from 'reactstrap';
function Header() {
  return (
    <Jumbotron>
      <div className="container">
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1>Github Username</h1>
            <p>Getting inpiration from github users favorite coding language.</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}


export default Header;