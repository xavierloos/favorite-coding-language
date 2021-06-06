import React, {useEffect, useState} from 'react';
import {Form} from 'semantic-ui-react'

function Search() {
  const [result, setResult] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/users/AArnott/repos")
      .then(res => res.json())
      .then(data => {
        const languages = data.map(language => (
          language.language
        ))
        favLanguage(languages)
      });
  }, [])

  const setData = result => {
    setResult(result)
  }

  const favLanguage = lang =>{
    var countLang = {}, counter = 0, favorite = [];

    lang.forEach(item => {
      (!countLang[item]) ? countLang[item] = 1 :  countLang[item]++; 
      if (countLang[item] > counter) {
        counter = countLang[item];
        favorite = [item];
      } else if (countLang[item] === counter) {
        favorite.push(item);
      }
    });

    setData(favorite)
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