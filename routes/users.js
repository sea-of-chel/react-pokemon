var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "name": "bulbasaur",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "ivysaur",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "venusaur",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "charmander",
      "types": [
          "fire"
      ]
  },
  {
      "name": "charmeleon",
      "types": [
          "fire"
      ]
  },
  {
      "name": "charizard",
      "types": [
          "flying",
          "fire"
      ]
  },
  {
      "name": "squirtle",
      "types": [
          "water"
      ]
  },
  {
      "name": "wartortle",
      "types": [
          "water"
      ]
  },
  {
      "name": "blastoise",
      "types": [
          "water"
      ]
  },
  {
      "name": "caterpie",
      "types": [
          "bug"
      ]
  },
  {
      "name": "metapod",
      "types": [
          "bug"
      ]
  },
  {
      "name": "butterfree",
      "types": [
          "flying",
          "bug"
      ]
  },
  {
      "name": "weedle",
      "types": [
          "poison",
          "bug"
      ]
  },
  {
      "name": "kakuna",
      "types": [
          "poison",
          "bug"
      ]
  },
  {
      "name": "beedrill",
      "types": [
          "poison",
          "bug"
      ]
  },
  {
      "name": "pidgey",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "pidgeotto",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "pidgeot",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "rattata",
      "types": [
          "normal"
      ]
  },
  {
      "name": "raticate",
      "types": [
          "normal"
      ]
  },
  {
      "name": "spearow",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "fearow",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "ekans",
      "types": [
          "poison"
      ]
  },
  {
      "name": "arbok",
      "types": [
          "poison"
      ]
  },
  {
      "name": "pikachu",
      "types": [
          "electric"
      ]
  },
  {
      "name": "raichu",
      "types": [
          "electric"
      ]
  },
  {
      "name": "sandshrew",
      "types": [
          "ground"
      ]
  },
  {
      "name": "sandslash",
      "types": [
          "ground"
      ]
  },
  {
      "name": "nidoran-f",
      "types": [
          "poison"
      ]
  },
  {
      "name": "nidorina",
      "types": [
          "poison"
      ]
  },
  {
      "name": "nidoqueen",
      "types": [
          "ground",
          "poison"
      ]
  },
  {
      "name": "nidoran-m",
      "types": [
          "poison"
      ]
  },
  {
      "name": "nidorino",
      "types": [
          "poison"
      ]
  },
  {
      "name": "nidoking",
      "types": [
          "ground",
          "poison"
      ]
  },
  {
      "name": "clefairy",
      "types": [
          "fairy"
      ]
  },
  {
      "name": "clefable",
      "types": [
          "fairy"
      ]
  },
  {
      "name": "vulpix",
      "types": [
          "fire"
      ]
  },
  {
      "name": "ninetales",
      "types": [
          "fire"
      ]
  },
  {
      "name": "jigglypuff",
      "types": [
          "fairy",
          "normal"
      ]
  },
  {
      "name": "wigglytuff",
      "types": [
          "fairy",
          "normal"
      ]
  },
  {
      "name": "zubat",
      "types": [
          "flying",
          "poison"
      ]
  },
  {
      "name": "golbat",
      "types": [
          "flying",
          "poison"
      ]
  },
  {
      "name": "oddish",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "gloom",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "vileplume",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "paras",
      "types": [
          "grass",
          "bug"
      ]
  },
  {
      "name": "parasect",
      "types": [
          "grass",
          "bug"
      ]
  },
  {
      "name": "venonat",
      "types": [
          "poison",
          "bug"
      ]
  },
  {
      "name": "venomoth",
      "types": [
          "poison",
          "bug"
      ]
  },
  {
      "name": "diglett",
      "types": [
          "ground"
      ]
  },
  {
      "name": "dugtrio",
      "types": [
          "ground"
      ]
  },
  {
      "name": "meowth",
      "types": [
          "normal"
      ]
  },
  {
      "name": "persian",
      "types": [
          "normal"
      ]
  },
  {
      "name": "psyduck",
      "types": [
          "water"
      ]
  },
  {
      "name": "golduck",
      "types": [
          "water"
      ]
  },
  {
      "name": "mankey",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "primeape",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "growlithe",
      "types": [
          "fire"
      ]
  },
  {
      "name": "arcanine",
      "types": [
          "fire"
      ]
  },
  {
      "name": "poliwag",
      "types": [
          "water"
      ]
  },
  {
      "name": "poliwhirl",
      "types": [
          "water"
      ]
  },
  {
      "name": "poliwrath",
      "types": [
          "fighting",
          "water"
      ]
  },
  {
      "name": "abra",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "kadabra",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "alakazam",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "machop",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "machoke",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "machamp",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "bellsprout",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "weepinbell",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "victreebel",
      "types": [
          "poison",
          "grass"
      ]
  },
  {
      "name": "tentacool",
      "types": [
          "poison",
          "water"
      ]
  },
  {
      "name": "tentacruel",
      "types": [
          "poison",
          "water"
      ]
  },
  {
      "name": "geodude",
      "types": [
          "ground",
          "rock"
      ]
  },
  {
      "name": "graveler",
      "types": [
          "ground",
          "rock"
      ]
  },
  {
      "name": "golem",
      "types": [
          "ground",
          "rock"
      ]
  },
  {
      "name": "ponyta",
      "types": [
          "fire"
      ]
  },
  {
      "name": "rapidash",
      "types": [
          "fire"
      ]
  },
  {
      "name": "slowpoke",
      "types": [
          "psychic",
          "water"
      ]
  },
  {
      "name": "slowbro",
      "types": [
          "psychic",
          "water"
      ]
  },
  {
      "name": "magnemite",
      "types": [
          "steel",
          "electric"
      ]
  },
  {
      "name": "magneton",
      "types": [
          "steel",
          "electric"
      ]
  },
  {
      "name": "farfetchd",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "doduo",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "dodrio",
      "types": [
          "flying",
          "normal"
      ]
  },
  {
      "name": "seel",
      "types": [
          "water"
      ]
  },
  {
      "name": "dewgong",
      "types": [
          "ice",
          "water"
      ]
  },
  {
      "name": "grimer",
      "types": [
          "poison"
      ]
  },
  {
      "name": "muk",
      "types": [
          "poison"
      ]
  },
  {
      "name": "shellder",
      "types": [
          "water"
      ]
  },
  {
      "name": "cloyster",
      "types": [
          "ice",
          "water"
      ]
  },
  {
      "name": "gastly",
      "types": [
          "poison",
          "ghost"
      ]
  },
  {
      "name": "haunter",
      "types": [
          "poison",
          "ghost"
      ]
  },
  {
      "name": "gengar",
      "types": [
          "poison",
          "ghost"
      ]
  },
  {
      "name": "onix",
      "types": [
          "ground",
          "rock"
      ]
  },
  {
      "name": "drowzee",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "hypno",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "krabby",
      "types": [
          "water"
      ]
  },
  {
      "name": "kingler",
      "types": [
          "water"
      ]
  },
  {
      "name": "voltorb",
      "types": [
          "electric"
      ]
  },
  {
      "name": "electrode",
      "types": [
          "electric"
      ]
  },
  {
      "name": "exeggcute",
      "types": [
          "psychic",
          "grass"
      ]
  },
  {
      "name": "exeggutor",
      "types": [
          "psychic",
          "grass"
      ]
  },
  {
      "name": "cubone",
      "types": [
          "ground"
      ]
  },
  {
      "name": "marowak",
      "types": [
          "ground"
      ]
  },
  {
      "name": "hitmonlee",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "hitmonchan",
      "types": [
          "fighting"
      ]
  },
  {
      "name": "lickitung",
      "types": [
          "normal"
      ]
  },
  {
      "name": "koffing",
      "types": [
          "poison"
      ]
  },
  {
      "name": "weezing",
      "types": [
          "poison"
      ]
  },
  {
      "name": "rhyhorn",
      "types": [
          "rock",
          "ground"
      ]
  },
  {
      "name": "rhydon",
      "types": [
          "rock",
          "ground"
      ]
  },
  {
      "name": "chansey",
      "types": [
          "normal"
      ]
  },
  {
      "name": "tangela",
      "types": [
          "grass"
      ]
  },
  {
      "name": "kangaskhan",
      "types": [
          "normal"
      ]
  },
  {
      "name": "horsea",
      "types": [
          "water"
      ]
  },
  {
      "name": "seadra",
      "types": [
          "water"
      ]
  },
  {
      "name": "goldeen",
      "types": [
          "water"
      ]
  },
  {
      "name": "seaking",
      "types": [
          "water"
      ]
  },
  {
      "name": "staryu",
      "types": [
          "water"
      ]
  },
  {
      "name": "starmie",
      "types": [
          "psychic",
          "water"
      ]
  },
  {
      "name": "mr-mime",
      "types": [
          "fairy",
          "psychic"
      ]
  },
  {
      "name": "scyther",
      "types": [
          "flying",
          "bug"
      ]
  },
  {
      "name": "jynx",
      "types": [
          "psychic",
          "ice"
      ]
  },
  {
      "name": "electabuzz",
      "types": [
          "electric"
      ]
  },
  {
      "name": "magmar",
      "types": [
          "fire"
      ]
  },
  {
      "name": "pinsir",
      "types": [
          "bug"
      ]
  },
  {
      "name": "tauros",
      "types": [
          "normal"
      ]
  },
  {
      "name": "magikarp",
      "types": [
          "water"
      ]
  },
  {
      "name": "gyarados",
      "types": [
          "flying",
          "water"
      ]
  },
  {
      "name": "lapras",
      "types": [
          "ice",
          "water"
      ]
  },
  {
      "name": "ditto",
      "types": [
          "normal"
      ]
  },
  {
      "name": "eevee",
      "types": [
          "normal"
      ]
  },
  {
      "name": "vaporeon",
      "types": [
          "water"
      ]
  },
  {
      "name": "jolteon",
      "types": [
          "electric"
      ]
  },
  {
      "name": "flareon",
      "types": [
          "fire"
      ]
  },
  {
      "name": "porygon",
      "types": [
          "normal"
      ]
  },
  {
      "name": "omanyte",
      "types": [
          "water",
          "rock"
      ]
  },
  {
      "name": "omastar",
      "types": [
          "water",
          "rock"
      ]
  },
  {
      "name": "kabuto",
      "types": [
          "water",
          "rock"
      ]
  },
  {
      "name": "kabutops",
      "types": [
          "water",
          "rock"
      ]
  },
  {
      "name": "aerodactyl",
      "types": [
          "flying",
          "rock"
      ]
  },
  {
      "name": "snorlax",
      "types": [
          "normal"
      ]
  },
  {
      "name": "articuno",
      "types": [
          "flying",
          "ice"
      ]
  },
  {
      "name": "zapdos",
      "types": [
          "flying",
          "electric"
      ]
  },
  {
      "name": "moltres",
      "types": [
          "flying",
          "fire"
      ]
  },
  {
      "name": "dratini",
      "types": [
          "dragon"
      ]
  },
  {
      "name": "dragonair",
      "types": [
          "dragon"
      ]
  },
  {
      "name": "dragonite",
      "types": [
          "flying",
          "dragon"
      ]
  },
  {
      "name": "mewtwo",
      "types": [
          "psychic"
      ]
  },
  {
      "name": "mew",
      "types": [
          "psychic"
      ]
  }
  ])
});

module.exports = router;
