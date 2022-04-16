// Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-repos-data");

getButton.onclick = function () {
  getRepos();
};

// Get repos functions
function getRepos() {
  if (theInput.value == "") {
    // If value is empty
    //alert("Value cannot be empty");
    reposData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        // console.log(repos);

        //Empty the container
        reposData.innerHTML = "";

        //Loop on repos
        repositories.forEach((repo) => {
          //console.log(repo.name)

          //Create the main div element
          let mainDiv = document.createElement("div");

          //Create repo name text
          let repoName = document.createTextNode(repo.name);

          //Append text to main div
          mainDiv.appendChild(repoName);

          //Append the main div to repo container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
