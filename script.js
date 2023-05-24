// // 575849851309482
// // https://superheroapi.com/api/access-token/character-id

// // 'https://api.themoviedb.org/3/movie/11?api_key=API_KEY'

// // 0746e1b9ba3d95f344d19e96a5f1bbfc

// const API_KEY = "0746e1b9ba3d95f344d19e96a5f1bbfc";
// const heroToken = "575849851309482";
// let randomId = Math.floor(Math.random() * 731) + 1;
// const heroesName = document.getElementById("name");
// const heroesImages = document.getElementById("img");
// const button = document.getElementById('btn')
// const heroesBigoraphy = document.getElementById("biography");
// const BASE_URL = `https://superheroapi.com/api.php/${heroToken}/${randomId}`;

// const getSuperHero = (randomId) => {
//   randomId = Math.floor(Math.random() * 731) + 1;
//   fetch(`${BASE_URL}`).then((response) =>
//     response.json().then((json) => {
//       heroesName.innerHTML = json.name;
//       console.log(json);
//       heroesImages.setAttribute("src", json.image.url);
//     //   heroesBigoraphy.innerHTML = Object.keys(json.powerstats);
//     return randomId
//     })
//   );
// };

// button.onclick = () => {
//     getSuperHero(randomId);
// }

// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "10223569763528853";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById("newHeroButton");

const heroImageDiv = document.getElementById("heroImage");

const searchButton = document.getElementById("searchButton");

const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  // name 👉 base_url/search/batman
  // json.results[0].image.url
  // id: 👉 base_url/id
  // json.image.url
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;

  const img = `<img src="${character.image.url}" height=200 width=200/>`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

// <p>💪 Strength: ${json.powerstats.strength}</p><p>🧠 Intelligence: ${json.powerstats.intelligence}</p><p>🧠 Combat: ${json.powerstats.intelligence}</p><p>🧠 Speed: ${json.powerstats.intelligence}</p><p>🧠 Durability: ${json.powerstats.intelligence}</p>

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

newHeroButton.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);
