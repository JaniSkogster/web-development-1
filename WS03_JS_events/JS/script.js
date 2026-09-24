function showTable() {
    const animal1 = "Tiikeri";
    const habitat1 = "Metsä";
    const diet1 = "Liha";

    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table border="1">
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal1}</td>
                <td>${habitat1}</td>
                <td>${diet1}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
}


const heading1 = document.querySelector("#heading1");

heading1.addEventListener("click", function () {
    heading1.style.color = "red";
    heading1.innerHTML = "Bye bye mouse!";
});


const heading2 = document.querySelector("#heading2");

heading2.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});


const textarea = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");


textarea.addEventListener("focus", function () {
    textarea.style.backgroundColor = "lightyellow";
});

textarea.addEventListener("blur", function () {
    status.innerHTML = "";
    textarea.style.backgroundColor = "white";
});

textarea.addEventListener("input", function () {
    charcount.innerHTML = `${textarea.value.length}/200`;
    preview.innerHTML = textarea.value;
});