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
  
  