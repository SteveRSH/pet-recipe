let article = document.querySelector("article");
let search = document.getElementById("#mcsearch")
let press = document.querySelector("#petSearching");

function trialAnd(smartPet){
  let results = smartPet.json();
  return results;
}

function receipes(smartPet){
console.log(smartPet);
// console.log(smartPet.results[0].href);
// // console.log(smartPet.results[0].ingredients);
// console.log(smartPet.results[0].thumbnail);
// console.log(smartPet.results[0].title);



let story = " ";


//images for the placeholder is not showing in the browser (RESOLVED - changed
//backupImage to backupImage.outerHTMl (thanks to Ben))

for (let i = 0; i < smartPet.results.length; i++){
  // let article = " ";
let backupImage = document.createElement('img');
backupImage.setAttribute('src', 'http://via.placeholder.com/140x100');

    if (smartPet.results[i].thumbnail === ''){
      let blankphoto = `
      <div class="mcsearch">


      <a href="${smartPet.results[i].href}" target="_blank">
      ${backupImage.outerHTML}</a>
      <p>${smartPet.results[i].title}</p>

      </div>
      `;

      story += blankphoto;

  } else {
    let additional = `
    <div class="mcsearch">
      <div class="mcsearch_recipes">
      <a href="${smartPet.results[i].href}" target="_blank"><img src="${smartPet.results[i].thumbnail}"></a>
  <p>${smartPet.results[i].title}</p>
  </div>
  </div>
  ` ;

    story += additional;
  }



}

article.innerHTML = story;
}

function pups(cats) {
// console.log(cats);
}

press.addEventListener("click",
  function(ev) {
    ev.preventDefault();
    let thisRecipes = document.querySelector("#mcsearch").value;
// fetch ("https://recipepuppyproxy.herokuapp.com/api/?q=omelet")
fetch (`http://recipepuppyproxy.herokuapp.com/api/?q=${thisRecipes}`)
  .then(trialAnd)
  .then(receipes)
  .catch(pups);
  console.log('whatisright');
})
