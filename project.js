const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearAll = document.querySelector("#clear-films");


// Start UI Object  ---- We do not need to create an object because our functions are defined as static.
// const ui = new UI();

// Create Storage Object ---- We do not need to create an object because our functions are defined as static.
// const storage = new Storage();



const eventListeners = () => {  // when the page is loaded
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", () => {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    })


    //delete movie from cardbody
    cardBody.addEventListener("click", deleteFilm = (e) =>{
        if(e.target.id == "delete-film"){ //if the delete button was pressed
            UI.deleteFilmFromUI(e.target)

            //We are trying to find the name of the movie we deleted so that we can delete it from local storage.
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

            UI.displayMesages("Film deleted successfully!", "success")
           
        }
    });

    clearAll.addEventListener("click", clearAllFilms=()=>{
        if(confirm("Are you sure ?")) {
            UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromStorage();
        }
    });


}


// Load All Events
eventListeners();







function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url ===" "){
        UI.displayMesages("Please do not leave empty space!", "danger")
    }

    else {
        // New Film
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm)  // Add film in interface
        Storage.addFilmToStorage(newFilm); // Add film in storage
        UI.displayMesages("Film added successfully", "success") // Alert
    }

    UI.clearInputs(titleElement, directorElement, urlElement)



    e.preventDefault();  // Block form Submit
}






