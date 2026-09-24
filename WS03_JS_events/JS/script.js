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