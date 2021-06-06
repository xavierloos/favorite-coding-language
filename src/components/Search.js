import React, {useEffect, useState} from 'react';
import {Form} from 'semantic-ui-react'

function Search() {
  const [result, setResult] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/users/xavierloos/repos")
      .then(res => res.json())
      .then(data => {
        const languages = data.map(language => (
          language.language
        ))
        setData(languages)
      });
  }, [])

  const setData = result => {
    setResult(result)
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Input placeholder="Search for a github username" name="username" />
          <Form.Button content="Search" />
        </Form.Group>
      </Form>
      <div>
        {result}
      </div>
    </div>
  );
}


export default Search;