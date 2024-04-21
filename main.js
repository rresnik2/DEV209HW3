var Movie = function(year, title, rating) {
  this.year = year;
  this.title = title;
  this.rating = rating;
  this.isValid = function() {
    if (this.rating < 1 || this.rating > 5) {
      return false;
    } else if (this.title === "" || this.title === null) {
      return false;
    } else if (this.year === "" || this.year === null) {
      return false;
    } else {
      return true;
    }
  }
}
var movieList = [];

document.addEventListener("DOMContentLoaded", function (event) {
    // this add event listener uses an aynonomus function
    
    document.getElementById("addMovie").addEventListener("click", function () {
        if (Movie(document.getElementById("year").value, document.getElementById("title").value, document.getElementById("rating").value).isValid);   //parseFloat converts string to float
        mpg.gallons = parseFloat(document.getElementById("gallons").value);
        if (!mpg.isValid()) {
            alert("Both entries must be numeric " +
                "and greater than zero");
        } else {
            document.getElementById("mpg").value = mpg.calculate().toFixed(1);
            document.getElementById("clear").focus(); // enter key clicks button
        }
    });


    document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("miles").value = "";
        document.getElementById("gallons").value = "";
        document.getElementById("mpg").value = "";
        
        document.getElementById("miles").focus();
    });
    
    // put the cursor where the user wants it
    document.getElementById("miles").focus();
});
