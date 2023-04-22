const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const movies = document.querySelector('#main')

const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data.results);
};

const showMovies = (data) => {
  movies.innerHTML=''
  data.forEach((movie) => {
    const box = document.createElement("div");
    box.classList.add("movie");
    box.innerHTML = `  <img src="${IMGPATH + movie.poster_path}"
    alt="">
<div class="movie-info">
    <h3>${movie.title}</h3>
    <span class='${rating(movie.vote_average)}'>${movie.vote_average}</span>
</div>
<div class="overview">
<p>${movie.overview}</p>

</div>`;
    movies.appendChild(box);
  });
};

function rating(vote){
   if(vote >= 8){
    return 'green'
   }else if (vote >= 5) {
    return 'orange'
   }else{
    return 'red'
   }
}

document.querySelector('#search').addEventListener('keyup',(event)=>{
  if(event.target.value != ""){
    // searched movies 
    getMovies(SEARCHAPI + event.target.value)
  }else{
    // popular movies 
    getMovies(APIURL);
  }
})

// init call 
getMovies(APIURL);

