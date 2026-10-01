
// YLÄOSAN TAULUKKO NÄYTÄ/PIILOTA

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu");
});




// TEHTÄVÄ 1: Sisällön muuttaminen


const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");

const taskOneHeading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");


// Muuta otsikko
changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});


// Muuta tyyliä
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});


// Muuta eläinteksti
changeTextButton.addEventListener("click", function () {
    animalText.textContent = 
        "Tiikerit ovat suuria raidallisia petoeläimiä.";
});





// TEHTÄVÄ 2: Elementtien luominen


const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");


const animalParagraph = document.createElement("p");
animalParagraph.textContent =
    "Panda on mustavalkoinen eläin, joka syö pääasiassa bambua.";


const animalImageCreated = document.createElement("img");
animalImageCreated.src = "images/panda.png";
animalImageCreated.alt = "Panda";


animalContent.append(
    animalHeading,
    animalParagraph,
    animalImageCreated
);


// Piilota ja näytä eläin

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");


hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});


showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});

// TEHTÄVÄ 3: Eläimen valitseminen

const animalSelect = document.querySelector("#animalSelect");

const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");


animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    console.log("Selected Animal:", selectedAnimal);


    if (selectedAnimal === "elephant") {

        animalName.textContent = "Elefantti";

        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elefantti";

        animalDescription.textContent =
            "Elefantit ovat maailman suurimpia maaeläimiä.";

    }


    else if (selectedAnimal === "tiger") {

        animalName.textContent = "Tiikeri";

        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiikeri";

        animalDescription.textContent =
            "Tiikerit ovat raidallisia eläimiä.";

    }


    else if (selectedAnimal === "penguin") {

        animalName.textContent = "Pingviini";

        animalImage.src = "images/penguin.png";
        animalImage.alt = "Pingviini";

        animalDescription.textContent =
            "Pingviinit elävät kylmissä ympäristöissä.";

    }


    else if (selectedAnimal === "panda") {

        animalName.textContent = "Panda";

        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";

        animalDescription.textContent =
            "Pandat syövät pääasiassa bambua.";

    }

});


// Kuvan hover-efekti

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});


animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


// TEHTÄVÄ 4: Eläinhavaintojen lisääminen


const animalForm = document.querySelector("#animalForm");

const observationTableBody = document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const animal = document.querySelector("#observationAnimal").value;

    const location = document.querySelector("#observationLocation").value;

    const dateValue = document.querySelector("#observationDate").value;



    // Tarkistus
    if (
        animal === "" ||
        location === "" ||
        dateValue === ""
    ) {

        alert("Täytä kaikki kentät.");
        return;

    }


    const parts = dateValue.split("-");

    const date =
        `${parts[2]}.${Number(parts[1])}.${parts[0]}`;


    const tr = document.createElement("tr");


    const tdAnimal = document.createElement("td");
    tdAnimal.textContent = animal;


    const tdLocation = document.createElement("td");
    tdLocation.textContent = location;


    const tdDate = document.createElement("td");
    tdDate.textContent = date;



    tr.append(
        tdAnimal,
        tdLocation,
        tdDate
    );


    observationTableBody.append(tr);


    animalForm.reset();

});