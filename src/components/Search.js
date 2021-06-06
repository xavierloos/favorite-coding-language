import React, {useEffect} from 'react';
import {Form} from 'semantic-ui-react'

function Search() {

  useEffect(() => {
    fetch("https://api.github.com/users/xavierloos/repos")
      .then(res => res.json())
      .then(data => {
        const result = data.map(language => (
          language.language
        ))
        console.log(result)
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