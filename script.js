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
        "button text": ["Instructions", "", "Pick Chapter", "Start Adventure!"],
        "button functions": [goHowTo1, "", pickChapter, startAdventure],
        text: ["Welcome to Pokemon Jr Adventures FLO.EX, a game where you and your children tell a story together!",
            "<p>Tap on \"Setup\", \"Gameplay\", or \"Contest Rules\" to read instructions on how to play this game.</p>",
            "<p>Tap on \"Start Adventure!\" when you and your trainers are ready to begin!</p>"]
    },
    {
        name: "A Note to Parents",
        "button text": ["Home", "", "", "Next Page"],
        "button functions": [goHome, "", "", goHowTo2],
        text: ["<h1>A Note to Parents</h1>",
            "<p>In Pokemon Jr., you and your children tell a story together.  More important, your children have an active role in determining what happens and how the story ends.  Through this storytelling game your children exercise their minds and flex their imaginations.  The game stresses reading skills as well as imagination and creativity, but it does so in a fun and exciting way.  Plus, it features the popular characters from the Pokemon animated series and video games that many children know and love.</p>",
            "<p>Talk with children before playing.  Let them see how much they already know about Pokemon, and let them share that knowledge with you.</p>",
            "<p>Encourage questions and interaction.  This storytelling game works best when everyone contributes to the tale.</p>",
            "<p>Praise all efforts.  There are no right or wrong answers when creating a Pokemon story.</p>",
            "<p>Finally, have fun.  Enjoy this time with your children.  It's a story - act in characters and use different voices to describe the tale.  It's a game - encourage involvement and don't take it too seriously.</p>"]
    },
    {
        name: "Table of Contents",
        "button text": ["Home", "", "Previous Page", "Next Page"],
        "button functions": [goHome, "", goHowTo1, goHowTo3],
        text: ["<h1>Table of Contents</h1>",
            "<p><a onclick=\"goHowTo3()\">Object</a></p>",
            "<p><a onclick=\"goHowTo4()\">Setup</a></p>",
            "<p><a onclick=\"goHowTo5()\">Gameplay</a></p>",
            "<p><a onclick=\"goHowTo6()\">Pokemon Contest Rules</a></p>",
            "<p><a onclick=\"goHowTo7()\">Pokemon Contest Example</a></p>",
            "<p><a onclick=\"goHowTo8()\">Telling Stories with Pokemon</a></p>",
            "<p><a onclick=\"pickChapter()\">Pick a Chapter</a></p>"]
    },
    {
        name: "Object",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo2, goHowTo2, goHowTo4],
        text: ["<h1>Object</h1>",
            "<p>Kids play <b>Pokemon Trainers</b>, trying to catch Pokemon and solve problems presented in each episode.  A parent or other adult is the <b>Narrator</b> for each episode, using this Story App as a guide.</p>"]
    },
    {
        name: "Setup",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo2, goHowTo3, goHowTo5],
        text: ["<h1>Setup</h1>",
            "<p>The <b>Narrator</b> keeps this Story App and follows the directions for the episode being played.</p>",
            "<p><b>If this is your first game</b>... you're about to play <b>Episode 1: I Choose You!</b> </p>",
            "<p><b>If you've already played Episode One</b>... </p>"]
    },
    {
        name: "Gameplay",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo2, goHowTo4, goHowTo6],
        text: ["<h1>Gameplay</h1>",
            "<p>You're the <b>Narrator</b>.  You select an episode from the Story App and follow the directions.  You read part of a story to the Trainers.  The Trainers add details to the story by answering questions, describing actions, and selecting Pokemon from their teams to participate in <b>Pokemon Contests</b>.</p>",
            "<p>The Trainer to the left of the Narrator always acts first, followed by the other Trainers in order, left to right.</p>",
            "<p>When it's time for a Contest, refer to the Pokemon Contest rules described on the following page.</p>",
            "<p>An episode ends when the Trainers have overcome the obstacle or otherwise achieved the goal of the episode, or when all of the Pokemon on each Trainer's team have fainted.</p>",
            "<h2>Pokemon Checklists</h2>",
            "<p>Each Trainer gets a <b>Pokemon Checklist</b> in Episode 2.  Whenever a Trainer catches a Pokemon, he or shee checks the box next to its name.  The checked boxes show which Pokemon are on a Trainer's team.  Whenever you start a new episode, give each Trainer the Power Cards that correspond to the boxes checked on his or her Checklists.</p>"]
    },
    {
        name: "Pokemon Contest Rules",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo2, goHowTo5, goHowTo7],
        text: ["<h1>Gameplay</h1>",
            "<p>Pokemon are good at all sorts of things.  They have special powers that let them fight and help their Trainers solve problems as they occur in episodes.</p>",
            "<p>Whenever a Pokemon uses its special powers, you run a <b>Pokemon Contest</b>.  A Contest helps determine the winner of a challenge, or is used to see if a Pokemon accomplishes some other kind of task.  (You'll see examples of this in the story episodes.)</p>",
            "<h2>How To Run A Contest</h2>",
            "<p>1. Each Trainer selects on <b>Pokemon Power Card</b> from his or her team.  (Trainers can switch cards at the start of every round)</p>",
            "<p>2. Each Trainer places the Power Card so that one power is <b>face up</b>.  That's the power a Pokemon is going to use this round.</p>",
            "<p>3. Everyone involved in the Contest <b>rolls the die.</b> (The Narrator rolls for opponents described in the story episodes.)</p>",
            "<p>4. If a Trainer rolls a number listed on his or her face-up Power Card, the Pokemon succeeds.</p>",
            "<p>5. Apply the power's effect.</p>",
            "<p>6. Play additional <b>rounds</b> (steps 1 to 5) until one side's Pokemon have all <b>fainted</b> or <b>run away</b>.</p>",
            "<h2>Power Effects</h2>",
            "<p>Different Pokemon have different powers.  Here are the effects these powers have:</p>",
            "<p><b>Hits</b> - The most common power effect is a Hit.  A Hit causes damage to an opponent.  Use the <b>Hit Tokens</b> to keep track of damage. (Sometimes Pokemon must solve a problem by causing a certain amount of Hits.  This is explained in the appropriate story episodes.)</p>",
            "<p><b>Head</b> - Some powers heal Hit Points.  In this case, return that number of Hit Tokens to the Hit Token pile.</p>",
            "<p><b>Attack Again</b> - If a Pokemon gets to attack again, roll the die for the power that's face up.</p>",
            "<h2>Using the Pokecoin</h2>",
            "<p>Some powers show an additional effect based on a flip of the <b>Pokecoin</b>.  If a Trainer rolls a number on the Power Card and the Power Card also says to flip the Pokecoin, that Trainer <b>flips</b> the Pokecoin.</p>",
            "<p>If it lands face up, the power's additional effect is added to the result.</p>",
            "<p>If it lands face down, there is no additiona effect.</p>",
            "<p>The Pokecoin can also be used to determine other kinds of results.  The story episodes tell you how when appropriate.</p>",
            "<h2>Damage</h2>",
            "<p>A <b>Pokemon Contest</b> usually pits one Trainer's Pokemon against another Trainer's Pokemon.  In these Contests, <b>Hits</b> damage opposing Pokemon.</p>",
            "<p>A Pokemon Power Card shows how many <b>Hit Points</b> the Pokemon has.  When an opponent hits a Pokemon, place Hit Tokens next to the card.  Place one Hit Token for every Hit received.</p>",
            "<p>If a Pokemon is <b>Healed</b>, return the appropriate number of Hit Tokens to the Hit Token pile.</p>",
            "<p>A Pokemon <b>faints</b> when the number of Hit Tokens it received equals or exceeds the Pokemon's Hit Point total.</p>",
            "<p>At the end of a Contest, return the Hit Tokens of any Pokemon that didn't faint back to the Hit Token pile.</p>",
            "<h2>Switching Pokemon</h2>",
            "<p>At the beginning of each round in a Pokemon Contest, a Trainer can switch to another Pokemon on his or her team.  Follow these rules:</p>",
            "<p>The Pokemon in play has not yet fainted;</p>",
            "<p>The Pokemon being brought into play has not yet fainted;</p>",
            "<p>The switch must take place at the beginning of the round.</p>",
            "<h2>Faintaing</h2>",
            "<p>When a Pokemon gets hit during a Contest, it receives Hit Tokens.  The Pokemon <b>faints</b> when the number of Hit Tokens it receives equals or exceeds the Pokemon's Hit Point total.</p>",
            "<p>When a Pokemon faints, <b>return</b> all of its Hit Tokens to the Hit Token pile.</p>",
            "<p>A Trainer loses a Contest if his or her Pokemon faints.</p>",
            "<p>A fainted Pokemon <b>can't be used</b> until it is revived at a Pokemon Center.</p>",
            "<h2>Running Away</h2>",
            "<p>A Trainer's Pokemon <b>never</b> run away.  Some of the opponents controlled by the Narrator <b>will</b> run away when the Trainers have caused a certain amount of Hits.  This is explained in the episodes.</p>",
            "<p><b>Note:</b>  Pokemon Jr. can also be played without the storytelling elements.  Kids can play Pokemon Contests on their own, when no adult is available to narrate the story.</p>"]
    },
    {
        name: "Pokemon Contest Example",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo2, goHowTo6, goHowTo8],
        text: ["<h1>Pokemon Contest Example</h1>",
            "<p>Ash and Misty decide to have a practice Contest.  Ash selects <b>Bulbasaur</b> (with 9 Hit Points) from his team.  Misty chooses <b>Poliwag</b> (who has 8 Hit Points).</p>",
            "<p>Ash decides to use <b>Tackle</b> to start, so he places the Power Card with the Tackle power face up.  Misty wants to use <b>Bubble</b>, so she places that power face up.</p>",
            "<p>Ash rolls the die.  The card tells him he needs to roll a 4 or 5.  He rolls a 3.  That's a miss!</p>",
            "<p>Misty rolls the die.  The card tells her she needs to roll a 4, 5, or 6.  She rolls a 4.  That's a hit!  Bubble causes <b>3 Hits</b>, so Ash takes 3 Hit Tokens and places them beside Bulbasaur's Power Card.</p>",
            "<p>In the second round, both Trainers decide to use their Pokemon's other power.  They flip the cards over so that the other power is face up.</p>",
            "<p>Ash rolls for the <b>Leech Seed</b> power.  He needs to roll a 3, 4, 5, or 6.  He rolls a 6, for 1 Hit (Misty takes a Hit Token).  The card also says to flip the <b>Pokecoin</b>, so he does.  It lands on the face up side, so Ash <b>Heals</b> 1 Hit Point.  He returns one of his Hit Tokens to the Hit Token pile.</p>",
            "<p>Misty rolls for the <b>Water Gun</b> power.  She needs to roll a 3, 4, 5, or 6.  She rolls a 5, for 1 Hit (Ash takes a Hit Token).  She also gets to flip the Pokecoin.  It lands on the face up side, so Ash's Pokemon takes 3 more Hits.</p>",
            "<p>At the end of the second round, <b>Bulbasaur</b> has 6 Hit Tokens and <b>Poliwag</b> has 1 Hit Token.</p>",
            "<p>In the third round, Ash tries <b>Tackle</b> again.  He rolls a 5 and delivers 4 Hits to Poliwag.  Misty takes 4 Hit Tokens.</p>",
            "<p>Misty liked the way <b>Water Gun</b> performed, so she uses that power again.  She rolls a 4 for 1 Hit (Ash takes a Hit Token) and flips the Pokecoin.  It lands face down, so there is no additional effect.</p>",
            "<p>Now <b>Bulbasaur</b> has 7 Hit Tokens and <b>Poliwag</b> has 5.  If Bulbasaur gets 2 more, he'll <b>faint</b>.  Poliwag needs 3 more Hit Tokens to faint.</p>",
            "<p>In the fourth round, Ash calls for <b>Tackle</b> again.  He rolls a 3 and misses!  Misty calls for the <b>Bubble</b> attack and rolls a 4.  Bulbasaur takes 3 Hits!</p>",
            "<p>Now Ash's Pokemon has 10 Hit Tokens.  That's more than its 9 Hit Points, so Bulbasaur <b>faints</b>.  Misty and Poliwag <b>win</b> this hard-fought Pokemon Contest!</p>"]
    },
    {
        name: "Telling Stories with Pokemon Jr.",
        "button text": ["Home", "Table of Contents", "Previous Page", "Start Adventure!"],
        "button functions": [goHome, goHowTo2, goHowTo6, startAdventure],
        text: ["<h1>Telling Stories with Pokemon Jr.</h1>",
            "<p>As Narrator, you get to use this Story App to present exciting Pokemon episodes to the Trainers.  Encourage the Trainers to participate and make stuff up.  You follow along, make stuff up too, and have fun!</p>",
            "<p>Each episode is divided into two sections: <b class='ra'>read-alouds</b> and <b class='gp'>gameplay</b>.</p>",
            "<p><b>Read-Alouds</b>  <b class='ra'>This text starts with the Narrator symbol.  Read it out loud to the Trainers.  Pause often to let the Trainers ask questions, provide additional details, and otherwise participate in the storytelling fun.  THere are no right or wrong answers to these questions.  Instead, they help the Trainers imagine the Pokemon world and add to the story.</b></p>",
            "<p><b>Gameplay</b>  <b class='gp'>This text is colored so that you know it is different from the read-aloud text.  Don't read this text out loud.  Instead, follow the gameplay advice it provides.  It tells you when to run Pokemon Contests and describes other game-related events.</b></p>",
            "<p>This symbol <img class='stop' src='/images/stop.webp'> means you've reached the end of an episode.</p>",
            "<p>Whenever you and the Trainers are ready, tap on \"Start Adventure!\" to start playing!</p>"]
    },
];


//---------------------
//-----INITIALIZE BUTTONS
//---------------------
button1.onclick = goHowTo1;
button2.onclick = goHowTo1;
button3.onclick = pickChapter;
button4.onclick = startAdventure;

/*
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
function goHowTo1(){ //a note to parents
    update(locations[1]);
};

function goHowTo2(){ //table of contents
    update(locations[2]);
}

function goHowTo3(){ //object
    update(locations[3]);
}

function goHowTo4(){ //setup
    update(locations[4]);
}

function goHowTo5(){ //gameplay
    update(locations[5]);
}

function goHowTo6(){ //pokemon contest rules
    update(locations[6]);
}

function goHowTo7(){ //pokemon contest example
    update(locations[7]);
}

function goHowTo8(){ //telling stories with pokemon
    update(locations[8]);
}

function pickChapter(){
    update(locations[9]);
}

function startAdventure(){
    update(locations[10]);
}
*/




//name = "Object";
//locations.filter(item => item.name === name);

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

function goHome(){
    loc = "Home";
    location = locations.find(item => item.name === loc);
    update(location);
}
function goHowTo1(){ //a note to parents
    loc = "A Note To Parents";
    location = locations.find(item => item.name = loc) + 1;
    update(locations[location]);
};

function goHowTo2(){ //table of contents
    loc = "Home";
    location = locations.find(item => item.name === loc);
    update(locations[location]);
}

function goHowTo3(){ //object
    loc = "Home";
    location = locations.find(item => item.name === loc);
    update(location);
}

function goHowTo4(){ //setup
    loc = "Home";
    location = locations.find(item => item.name === loc);
    update(location);
}

function goHowTo5(){ //gameplay
    loc = "Home";
    location = locations.find(item => item.name === loc);
    update(location);
}

function goHowTo6(){ //pokemon contest rules
    loc = "Home";
    location = locations.filter(item => item.name === loc);
    update(location);
}

function goHowTo7(){ //pokemon contest example
    loc = "Home";
    location = locations.filter(item => item.name === loc);
    update(location);
}

function goHowTo8(){ //telling stories with pokemon
    loc = "Home";
    location = locations.filter(item => item.name === loc);
    update(location);
}

function pickChapter(){
    loc = "Home";
    location = locations.filter(item => item.name === loc);
    update(location);
}

function startAdventure(){
    loc = "Home";
    location = locations.filter(item => item.name === loc);
    update(location);
}