const pokemonContainer = document.getElementById("pokemon-info");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const types = document.getElementById("types");
const spriteContainer = document.getElementById("sprite-container");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input").value.toLowerCase();
const pokeListUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const pokeList = ({ respose, data, error }) => {
  fetch(pokeListUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const pokeStat = () => {
  fetch(pokeListUrl + id)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

searchBtn.addEventListener("click", pokeList);

const pokeDex = {
  id: "",
  name: "",
  url: "",
};
