const ships = [

    {
        name: "Hualian",

        quotes: [
            "Your Highness, I understand your everything.",

            "For you, the lanterns of ten thousand gods.",

            "Even after eight hundred years, my heart still follows you."],

        image:
            "assets/characters/hualian pic.jpg",

        background:
            "assets/backgrounds/hualian bg.jpg"
    },
    {
        name: "Wangxiang",

        quotes: [
            "I am here.",

            "Lan Zhan, look at me.",

            "Through lifetimes, I would still choose you."
        ],

        image:
            "assets/characters/wangxiang pic.jpg",

        background:
            "assets/backgrounds/wangxiang bg.jpg"
    },
    {
        name: "Ranwan",
        quotes: [
            "Shizun, don’t leave me behind again.",

            "I crossed hell itself to return to you."
        ],
        image: "assets/characters/ranwan pic.jpg",
        background: "assets/backgrounds/ranwan bg.jpg"
    },
    {
        name: "BingQiu",
        quotes: ["Shizun belongs beside me.",

            "I would rather destroy the world than lose you."],
        image: "assets/characters/bingqui pic.jpg",
        background: "assets/backgrounds/bingqui bg.jpg"


    },
    {
        name: "Ce'an",
        quotes: [
            "You are my sharpest blade and my only weakness.",

            "The world burns, yet I still reach for you."
        ],
        image: "assets/characters/cean-pic.jpg",
        background: "assets/backgrounds/cean-bg.jpg"
    }

];

const shipName =
    document.getElementById("ship-name");

const quoteText =
    document.getElementById("quote");

const characterImage =
    document.getElementById("character-image");

const button =
    document.getElementById("generate-btn");



button.addEventListener(
    "click",
    // RANDOM SHIP
    function () {
        const randomShipIndex = Math.floor(
            Math.random() * ships.length
        );


        // SELECT SHIP
        const selectedShip =
            ships[randomShipIndex];



        // RANDOM QUOTE
        const randomQuoteIndex =
            Math.floor(
                Math.random() *
                selectedShip.quotes.length
            );



        // SELECT QUOTE
        const selectedQuote =
            selectedShip.quotes[randomQuoteIndex];



        // CHANGE SHIP NAME
        shipName.textContent =
            selectedShip.name;



        // CHANGE QUOTE
        quoteText.textContent =
            selectedQuote;



        // CHANGE CHARACTER IMAGE
        characterImage.src =
            selectedShip.image;



        // CHANGE BACKGROUND
        document.body.style.backgroundImage =

            `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.7)
      ),

      url('${selectedShip.background}')`;


    }

);


// MUSIC CONTROL

const music =
    document.getElementById("bg-music");

const musicBtn =
    document.getElementById("music-btn");


music.volume = 0.6;


musicBtn.addEventListener(

    "click",

    function () {

        if (music.paused) {

            music.play();

            musicBtn.textContent =
                "🔇 Pause Music";

        }

        else {

            music.pause();

            musicBtn.textContent =
                "🎵 Play Music";

        }

    }

);