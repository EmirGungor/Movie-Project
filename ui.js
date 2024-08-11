class UI {
 //empty construction

    static addFilmToUI(newFilm) {
    /*<tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
      */

    const filmList = document.getElementById("films");
    filmList.innerHTML += `
      <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
       `;
    }

        //Clearing inputs after adding a movie
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    };

        //Displaying desired messages
    static displayMesages(message,type){   //type = success or danger etc
        const cardBody = document.querySelector(".card-body") // Selecting first card body
        
        // Create Alert Div
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;  //alert type
        div.textContent = message;  //alert message

        cardBody.appendChild(div);  // adding alert div to selected card body

        setTimeout(() => {
            div.remove();
        }, 2000);   // Removing error message after 2 secs
    }



    //Bringing movies from storage when the page is loaded
    static loadAllFilms(films){
        const filmList = document.querySelector("#films");
        films.forEach(film => {
            filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Film</a></td>
            </tr>
       `;
        });
    }

    //Clicked delete button
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove(); //We reached the tr element by using two parentElement values
    }



    // Clear All Film From Interface
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films")
        // filmList.innerHTML = "";  true but it works slow

        while(filmList.firstElementChild !== null){ //aslongas has a child
            filmList.firstElementChild.remove();
        }
    }
    
}