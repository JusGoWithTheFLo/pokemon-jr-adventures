//---------------------
//-----GLOBAL VARIABLES
//---------------------
let money = 50;
let contest;


//---------------------
//-----HTML SELECTORS
//---------------------
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const locationText = document.querySelector("#locationText");
const goldText = document.querySelector("#moneyText");
const text = document.querySelector("#text");


//---------------------
//-----OBJECTS
//---------------------
//-----LOCATIONS-----
const locations = [
    {
        name: "Home",
        "button text": ["Setup", "Gameplay", "Pick Chapter", "Start Adventure!"],
        "button functions": [goSetup, /*goGameplay, pickChapter, startAdventure*/],
        text: ["Welcome to Pokemon Jr Adventures FLO.EX, a game where you and your children tell a story together!",
            "<br><br>Tap on \"Setup\", \"Gameplay\", or \"Contest Rules\" to read instructions on how to play this game.",
            "<br><br>Tap on \"Start Adventure!\" when you and your trainers are ready to begin!"]
    },
    {
        name: "Setup",
        "button text": ["Home", "", "", "Next Page"],
        "button functions": [goHome, /*pickChapter, pickChapter, goSetup2*/],
        text: ["<h1>A Note to Parents</h1>",
            "<p>In Pokemon Jr., you and your children tell a story together.  More important, your children have an active role in determining what happens and how the story ends.  Through this storytelling game your children exercise their minds and flex their imaginations.  The game stresses reading skills as well as imagination and creativity, but it does so in a fun and exciting way.  Plus, it features the popular characters from the Pokemon animated series and video games that many children know and love.</p>",
            "<p>Talk with children before playing.  Let them see how much they already know about Pokemon, and let them share that knowledge with you.</p>",
            "<p>Encourage questions and interaction.  This storytelling game works best when everyone contributes to the tale.</p>",
            "<p>Praise all efforts.  There are no right or wrong answers when creating a Pokemon story.</p>",
            "<p>Finally, have fun.  Enjoy this time with your children.  It's a story - act in characters and use different voices to describe the tale.  It's a game - encourage involvement and don't take it too seriously.</p>"]
    },
    {
        name: "Setup",
        "button text": ["Home", "Pick Chapter", "Pick Chapter", "Next Page"],
        "button functions": [goHome, /*pickChapter, pickChapter, goSetup2*/],
        text: "1. The Narrarator keeps this Story Book and follows the directions for the episode being played.<br><br>"
    }
];


//---------------------
//-----INITIALIZE BUTTONS
//---------------------
button1.onclick = goSetup;
button2.onclick = goGameplay;
button3.onclick = pickChapter;
button4.onclick = startAdventure;


//---------------------
//-----UPDATE FUNCTION
//---------------------
function update(location){
    locationText.innerText = location.name;
    text.innerHTML = location.text.join(" ");
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
};


//---------------------
//-----GAMEPLAY FUNCTIONS
//---------------------
function goHome(){
    update(locations[0]);
}
function goSetup(){
    update(locations[1]);
};