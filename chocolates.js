let chocs = [
  {
    chocName: "Plain Milk",
    description: "Smooth milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_milk.jpg",
  },
  {
    chocName: "Plain Dark",
    description: "Dark chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_dark.jpg",
  },
  {
    chocName: "Bailey's Cup",
    description: "Dark chocolate with Bailey's Cream Filling",
    calories: 100,
    ingredients: "Cocoa butter, Milk, Cream, baileys",
    img: "assets/baileys_cup.jpg",
  },
  {
    chocName: "Cappuccino Cup",
    description: "Dark chocolatewith Cappuccino style cream filling",
    calories: 120,
    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
    img: "assets/cappuccino_cup.jpg",
  },
  {
    chocName: "Nutter Butter",
    description: "Dark chocolate with peanut butter",
    calories: 190,
    ingredients: "Cocoa butter, Milk, Cream, peanut butter",
    img: "assets/nutter_butter.jpg",
  },
  {
    chocName: "Orange Fondant",
    description: "Dark chocolate folded with orange fondant",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
    img: "assets/orange_fondant.jpg",
  },
  {
    chocName: "Pistachio Cup",
    description: "Dark chocolate with nuggets of pistachio",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
    img: "assets/pistachio_diamond.jpg",
  },
  {
    chocName: "Rum Barrel",
    description: "Dark chocolate with a decadent rum filling",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
    img: "assets/rum_barrel.jpg",
  },
  {
    chocName: "Toffee Crunch",
    description: "Dark chocolate with brittle toffee candy",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, toffee",
    img: "assets/toffee_crunch.jpg",
  },
  {
    chocName: "Plain Supreme",
    description: "Dark chocolate with slivers of milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_hybrid.jpg",
  },
];

let showContent = false;

const buildCards = () => {
  let cardsHtml = "";
  for (let i = 0; i < chocs.length; i++) {
    cardsHtml += '<div class="card">';
    cardsHtml += i + 1;
    cardsHtml += '<img src="' + chocs[i].img + '" alt="' + chocs[i].chocName + '" />';
    cardsHtml += "<h3>" + chocs[i].chocName + "</h3>";
    cardsHtml += '<p class="content">' + chocs[i].description + "<br />";
    cardsHtml += "Ingredients: " + chocs[i].ingredients + "</p>";
    cardsHtml += '<p class="content">' + chocs[i].calories + " calories</p>";
    cardsHtml += "</div>";
  }
  $(".wrapper").html(cardsHtml);
};

const toggleContent = () => {
  showContent = !showContent;
  if (showContent) $("p.content").show();
  else $("p.content").hide();
};

const pickRandomSample = () => {

  
  $(".wrapper .card").css("background-color", "#fff6e0");
  let randomIndex = Math.floor(Math.random() * chocs.length);
  let code = Math.floor(Math.random() * 50) + 1;
  $(".wrapper .card").eq(randomIndex).css("background-color", "yellow");
  alert("Card " + (randomIndex + 1) + " wins! Give code " + code + " to the cashier to claim your prize!");
};

$(document).ready(buildCards);