import React, {useEffect} from 'react';
import {Form} from 'semantic-ui-react'

function Search() {
  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }, [])
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Input placeholder="Search for a github username" name="username" />
          <Form.Button content="Search" />
        </Form.Group>
      </Form>
    </div>
  );
}


export default Search;