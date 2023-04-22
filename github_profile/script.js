const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

async function getuser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    console.log(data);
  } catch (error) {
    createMsgCard("User Not Found !!");
  }
}

function createMsgCard(msg) {
  const cardHTML = `<div class='card'>
  <h2>${msg}</h2>
  </div>`;
  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  const cardHTML = ` <div class="card">
  <div>
      <img src="${user.avatar_url}" class="avatar" alt="">
  </div>
  <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Followings</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repo">
<a class='repo' href='${user.html_url}'>${user.html_url}</a>
      </div>
  </div>
</div>`;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getuser(user);

    search.value = "";
  }
});
