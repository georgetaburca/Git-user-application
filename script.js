document.getElementById("btn").addEventListener("click", showUser);

function showUser() {
  const user = document.getElementById("githubuser").value;
  //concatenate first and last name
  const fullName = user.split(" ").join("");
  const url = "https://api.github.com/users/" + fullName;
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      if (data.message) {
        document.getElementById(
          "result"
        ).innerHTML = `<h3 style="text-align:center" >USER PROFILE NOT FOUND</h3>`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `<p style="text-align:center"><a href="https://www.github.com/${fullName}"><img src="${data.avatar_url}"></a></p>
    
       <h3 style="text-align:center"> ${data.name} (${data.login})</h3>
       <p style="text-align:center">Number of Followers: ${data.followers}</p>
       <p style="text-align:center" >Following: ${data.following}</p>
       <p style="text-align:center" >Location: ${data.location}</p>      
      `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
