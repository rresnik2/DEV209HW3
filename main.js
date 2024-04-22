
document.addEventListener("DOMContentLoaded", function(event) {
  function sortTitle() {
    movieList.sort(function(a, b) {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });

  }
  var movieList = [];
  
  document.getElementById("addMovie").addEventListener("click", function() {
    console.log(document.getElementById("year").value);
  console.log(document.getElementById("rating").value);
  console.log(document.getElementById("title").value);
    let movie = new Movie(document.getElementById("year").value, document.getElementById("title").value, document.getElementById("rating").value);

    if (!movie.isValid()) {
      alert("Rating must be 1 - 5, title and year cannot be empty");
    } 
    else {
      movieList.push(movie);
    }

  });

  document.getElementById("showMovies").addEventListener("click", function() {
    let oMovies = "<ul>";
    sortTitle();
    for (let i of movieList) {
  
      oMovies += "<li>Movie:\t" + i.title + ",\tYear:\t" + i.year + ",\tRating:\t"+ i.rating + "</li>";
    }
    oMovies += "</ul>";
    document.getElementById("movieList").innerHTML = oMovies;

  });



});