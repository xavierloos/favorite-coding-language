import React from 'react';
import { Jumbotron } from 'reactstrap';
import '../App.css';
function Header() {
  return (
    <Jumbotron>
      <div className="container">
        <div className="row row-header">
          <div className="col-3 col-sm-3">
            <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fgithub-octocat-logo-vector-png-octodex-api-octodex-json-at-master-cocoaheads-miami-octodex-896.png&f=1&nofb=1"/>
          </div>
          <div className="col-9 col-sm-9">
            <h1>Github Username</h1>
            <p className="slogan">Getting inpiration from github users favorite coding language.</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}


export default Header;