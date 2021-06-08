import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react'
import '../App.css';
import Card from 'react-bootstrap/Card'

function Search() {
  const [result, setResult] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [location, setLocation] = useState("")
  const [blog, setBlog] = useState("")
  const [github, setGithub] = useState("")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/users/xavierloos/repos")
      .then(res => res.json())
      .then(data => {
        const languages = data.map(language => (
          language.language
        ))
        favLanguage(languages)
      });
    fetch("https://api.github.com/users/xavierloos")
      .then(res => res.json())
      .then(data => {
        setUserData(data.login, data.avatar_url, data.name, data.location, data.blog, data.html_url)
      });
  }, [])

  const setUserData = (username, avatar, name, location, blog, github) => {
    setUsername(username)
    setAvatar(avatar)
    setName(name)
    setLocation(location)
    setBlog(blog)
    setGithub(github)
  }

  const setData = result => {
    setResult(result)
  }

  const favLanguage = lang => {
    var countLang = {}, counter = 0, favorite = [];
    lang.forEach(item => {
      (!countLang[item]) ? countLang[item] = 1 : countLang[item]++;
      if (countLang[item] > counter) {
        counter = countLang[item];
        favorite = [item];
      } else if (countLang[item] === counter) {
        favorite.push(item);
      }
    });
    setData(favorite)
  }

  const handleSearch = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then(res => res.json())
      .then(data => {
        const languages = data.map(language => (
          language.language
        ))
        favLanguage(languages)
      });
    fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data.login, data.avatar_url, data.name, data.location, data.blog, data.html_url)
      });
  }

  return (
    <div className="search-container">
      <div className="container-fluid search ">
        <div className="container ">
          <div className="row row-header ">
            <div className="col-12 col-sm-12 mx-auto align-content-center ">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Input placeholder="Search for a github username" name="username" onChange={handleSearch} />
                  <Form.Button content="Search" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-header ">
          <div className="col-12 col-sm-12 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <div className="card-header">
                <Card.Img className="avatar" src={avatar} />
              </div>
              <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>
                  {name} favorite language is {result}!
                  {location}
                  {blog}
                  {github}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Search;