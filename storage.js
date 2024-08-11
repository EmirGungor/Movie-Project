class Storage {
  //empty construction

  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    // We take the array with this function
    let films;

    if (localStorage.getItem("films") === null) {
      // If local storage is empty
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films")); // If there is a film, take this value

      //Local storage only accepts string values, so we need to convert the string value with JSON received here into array again.
    }

    return films;
  }


  //delete films from storage
  static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmsFromStorage(); // Get the array in storage

    films.forEach((film,index) => {  // we wrote index cause we need the index number
        //splice
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films)); 
    //Writing the current version of movies back to localstorage
  }




  //Clear all films from storage
  static clearAllFilmsFromStorage(){

    localStorage.removeItem("films")

  }

}
