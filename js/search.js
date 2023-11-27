
const menuItems = [
    "Delicious Pizza",
    "Season Pizza",
    "Yummy Pizza",
    "The Italian's pasta",
    "Healthy Pasta",
    "Cartofi Prăjiți",
    "Delicious Burger",
    "Tasty Thursdays",
    "Texas Special Burger",
    "Burger Delight",
    "Tasty Burger",
    "DAMN! Burger",
    "Midweek Madness",
    "Mexican Flavours",
    "Spooky Season",
    "Real Burger",
    "Sunday Special"
];

const products = [
    {
        name: "Delicious Pizza",
        description: "Nu numai că avem cei mai buni burgeri, dar ce zici de cea mai bună pizza?",
        img : "/images/deliciouspizza.png"
     },

     {
      name: "Season Pizza",
      description: "Toate tipurile de pizza intr-o singura cutie? DA! Doar cu Season Pizza!",
      img: "/images/seasonpizza.png"
   },

   {
      name: "Yummy Pizza",
      description: "Făcută cu iubire în cele mai performate cuptoare, pentru tine.",
      img: "/images/yummypizza.png"
   },

   {
      name: "The Italian's Pasta",
      description: "Chiar și italienii sunt invidioși pe rețeta noastră de paste.",
      img: "/images/italianspasta.png"
   },

   {
      name: "Healthy Pasta",
      description: "Pastele noastre sunt făcute din cele mai proaspete și mai sănătoase ingrediente.",
      img: "/images/healthypasta.png"
   },
   
   {
      name: "Cartofi prăjiți",
      description: "Ți-e poftă de ceva dar nu ți-e foame? Încearcă o porție de cartofi proaspăt prăjiți pentru tine!",
      img: "/images/cartofiprajti.png"
   },

     {
        name: "Delicious Burger",
        description: "Gustul original al Ultimate Burger Factory de la care a început povestea noastră.",
        img: "/images/deliciousburger.png"
     },

     {
      name: "Tasty Thursdays",
      description: "Delicios si savuros!",
      img: "/images/tastythurdays.jpg"
   },
 
     {
        name: "Texas Special Burger",
        description: "Creat de texani pentru tine!",
        img: "/images/texasspecialburger.jpg"
     },

     {
      name: "Burger Delight",
      description: "Pentru pofticiosi!",
      img: "/images/burgerdelight.jpg"
   },

     {
        name: "Tasty Burger",
        description: "Mai bun decât orice alt burger pe care l-ai încercat până acum!",
        img: "/images/tastyburger.jpg"
     },

     {
        name: "DAMN! Burger",
        description: "Ți-e poftă de un burger delicios plin de cașcaval? DAMN! e pentru tine!",
        img: "/images/damnburger.png"
     },

     {
      name: "Midweek Madness",
      description: "Punem pariu ca nu ai incercat ceva mai gustos!",
      img: "/images/midweekmadness.jpg"
   },
   {
      name: "Mexican Flavours",
      description: "Pentru cei pasionati de picant!",
      img: "/images/mexicanflavours.png"
   },
   {
      name: "Spooky Season",
      description: "Infricosator de gustos!",
      img: "/images/spookyseason.jpg"
   },
   {
      name: "Real Burger",
      description: "Gustul autentic, american!",
      img: "/images/realburger.jpg"
   },
   {
      name: "Sunday Special",
      description: "Pentru ca fiecare zi merita sa se simta ca o zi relaxanta de sambata!",
      img: "/images/sundayspecial.jpg"
   },

]
document.getElementById("searchButton").addEventListener("click", searchMenu );

document.getElementById("searchTerm").addEventListener("input", function() {
    searchMenu();
});


function searchMenu() {
   var searchInputElement = document.getElementById("searchTerm");


   if (searchInputElement) {
       var searchTerm = searchInputElement.value.toLowerCase();

       if (searchTerm.trim() === "") {
           clearResults();
           return;
       }
       try {
           const filteredItems = menuItems.filter(item => item.toLowerCase().includes(searchTerm));
           displayResults(filteredItems);
       } catch (error) {
           console.error("Eroare în timpul căutării:", error);
       }
   } else {
       console.error("Elementul cu id-ul 'searchInput' nu a fost găsit.");
   }
}

function clearResults() {
    const resultContainer = document.getElementById("resultsContainer");
    resultContainer.innerHTML = "";
}

function displayResults(results) {
   const resultContainer = document.getElementById("resultsContainer");
   resultContainer.innerHTML = "";


   results.forEach(product => {
       const productBox = document.createElement("div");
       productBox.classList.add("product-box");

       const productImage = document.createElement("img");

       productImage.src = "/images/" + product.img;
       productBox.appendChild(productImage);

       const productName = document.createElement("h3");
       productName.textContent = product.name;
       productBox.appendChild(productName);

       const productDescription = document.createElement("p");
       productDescription.textContent = product.description;
       productBox.appendChild(productDescription);

       resultContainer.appendChild(productBox);
   });
}
