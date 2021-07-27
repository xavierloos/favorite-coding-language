import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";
import { Button } from 'reactstrap';

function Search() {
  const [result, setResult] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [location, setLocation] = useState("")
  const [blog, setBlog] = useState("")
  const [git, setGit] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/users/xavierloos/repos")
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          const languages = data.map(language => (
            language.language
          ))
          favLanguage(languages)
          setError(null)
        }
      });
    fetch("https://api.github.com/users/xavierloos")
      .then(res => res.json())
      .then(data => {
        (data.message) ? setError(data.message) : setUserData(data.login, data.avatar_url, data.name, data.location, data.blog, data.html_url);
      });
  }, [])

  const setUserData = (username, avatar, name, location, blog, git) => {
    setUsername(username)
    setAvatar(avatar)
    setName(name)
    setLocation(location)
    setBlog(blog)
    setGit(git)
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
        if (data.message) {
          setError(data.message)
        } else {
          const languages = data.map(language => (
            language.language
          ))
          favLanguage(languages)
          setError(null)
        }

      });
    fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(data => {
        (data.message) ? setError(data.message) : setUserData(data.login, data.avatar_url, data.name, data.location, data.blog, data.html_url)
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
                  <Form.Input placeholder="Search for a github username" name="username" onChange={handleSearch} required />
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
            {error ? (<h1>Username not found, please try another username</h1>) : (
              <Card style={{ width: '18rem' }}>
                <div className="card-header">
                  <Card.Img className="avatar" src={avatar} />
                </div>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">{name}</Card.Title>
                  <Card.Text>
                    <div className="info">
                      @{username}'s favorite language is <span className="lang">{result}</span>!
                  </div>
                    <div className="col-12 col-sm-12 d-flex justify-content-between">
                      <div className="text-muted" >
                        <FaMapMarkerAlt />{location}
                      </div>
                      <div >
                        <a href={blog} alt="Go to the blog link" className="text-muted"><FaLink /> Blog</a>
                      </div>
                    </div>
                    <div>
                      <a href={git} alt="Go to GitHub">
                        <Button className="github-button">Open on Github</Button>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Search;