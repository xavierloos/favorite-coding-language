const Github = {
  search() {
    return fetch(`https://api.github.com/users/xavierloos/repos`)
      .then(response => {
        return response.json();
      }).then(jsonResponse => {
        console.log("Res")
      });
  }
};

export default Github;