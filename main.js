
//denna variabel representerar textrutan.
let textruta = document.getElementById("textruta");
//denna variabel kommer lagra textinmatningen.
let textinmatning;

//denna variabeln representerar rutan för output:
let outputBox = document.querySelector(".printruta");
console.log(outputBox);

//representerar rensa-knappen
let rensa = document.getElementById("rensa");


//Hämtar formuläret och lagrar den i variabeln form för att kunna peka på den vid submit
let form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log("Eventet har aktiverats!");

    //visar oututrutan och rensa-knappen
    outputBox.style = "display: block;";
    rensa.style = "display: block;";



    //skriver värdet till variabeln textinmatning
    textinmatning = document.getElementById("textruta").value;
    //console.log("textinmatningen är : " + textinmatning);

    //nollställer inputrutan åt användaren
    textruta.value = "";

    //skapar variabel som håller nytt p-element
    let mittNyaElement = document.createElement("p");

    //fyller p-elementet med texten användaren matade in
    mittNyaElement.innerHTML = "wow! detta var vad du skrev: <br><br>" + textinmatning;

    //Placerar p-elementet i outputboxen
    outputBox.appendChild(mittNyaElement);



    //Tar bort p-elementet om man klickar på rensaknappen.
    rensa.addEventListener("click", function () {
        outputBox.removeChild(mittNyaElement);
    })

})














