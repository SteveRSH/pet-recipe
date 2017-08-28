let article = document.querySelector("article");
let search = document.getElementById("#mcsearch");

let foodSearch = document.querySelector("petSerching");
foodSearch.addEventListener("click", function(petSerching) {petSerching.preventDefault();

let mcsearch = document.querySelector("mcsearch").value;
fetch (`https://recipepuppyproxy.herokuapp.com/search?term=${mcsearch}&limit=8`)

.then(function(smartPet){
  return smartPet.json();
}).then(function(smartPet){

function trialAnd(smartPet){
  let results = smartPet.json();
  return results;
}
}
let result = document.querySelector(".placement");
let petSerching="";

for (let i = 0; i <smartPet.results.length; i++){
  // let article = " ";
  // let story =

  let backupImage = `<img src="http://via.placeholder.com/140x100"></a>`;

    if (smartPet.results[i].thumbnail === ''){
      let blankphoto = `
      <div class="search_givesrecipes">
      <figure>
      <a href="${smartPet.results[i].href}" target="_blank">
      ${backupImage}
      <figcaption>${smartPet.results[i].title}</figcaption>
      <figure>
      </div>
      `;


    } else {
      let additional = `
      <div class="mcsearch">
        <div class="mcsearch_recipes">
        <a href="${smartPet.results[i].href}" target="_blank"><img src="${smartPet.results[i].thumbnail}"></a>
    <p>${smartPet.results[i].title}</p>
    </div>
    </div>
    ` ;


  };

// function receipes(smartPet){
// console.log(smartPet);
// console.log(smartPet.results[0].href);
// // console.log(smartPet.results[0].ingredients);
// console.log(smartPet.results[0].thumbnail);
// console.log(smartPet.results[0].title);














//   <div class="mcsearch">
//     <div class="mcsearch_recipes">
//     <a href="${smartPet.results[i].href}" target="_blank"><img src="${smartPet.results[i].thumbnail}"></a>
// <p>${smartPet.results[i].title}</p>
// </div>
// </div>
// ` ;

// story += article;
// };








// fetch ("https://recipepuppyproxy.herokuapp.com/api/?q=omelet")
//   .then(trialAnd)
//   .then(receipes)
//   .catch(pups);
