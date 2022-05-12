const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-field");
const text = document.getElementById("text");

const url = "https://api.dataforsyningen.dk/postnumre?nr="

searchButton.addEventListener("click", async () => {
    const uri = url + searchField.value;
    const result = await fetch(uri);
    const resultJson = await result.json();
    let kommuner = ""
    for (let i = 0; i < resultJson[0].kommuner.length; i++) {
         kommuner += resultJson[0].kommuner[i].navn + "\n"
    }
    text.innerHTML = "Nummer: " + resultJson[0].nr + "\nBy: " + resultJson[0].navn + "\nKommuner:\n" + kommuner
});