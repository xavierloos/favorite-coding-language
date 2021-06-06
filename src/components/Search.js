import React from 'react';
import {Form} from 'semantic-ui-react'

function Search() {
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