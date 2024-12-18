//---------------------
//-----GLOBAL VARIABLES
//---------------------
let money = 50;
let contest;
let currentLocation = "Home";
let currentEpisode = "Home";
let lastEpisode = 0;

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
const actionScreen = document.querySelector("#actionScreen");
const action = document.querySelector("#action");
const action_button1 = document.querySelector("#action_button1");
const action_button2 = document.querySelector("#action_button2");

const testText = document.querySelector("#testText");


//---------------------
//-----OBJECTS
//---------------------
//-------------------------LOCATIONS-------------------------
const locations = [
    //--------------------------------------------------
    //----------------------HOME------------------------
    //--------------------------------------------------
    {
        name: "Home",
        "button text": ["Instructions", "", "Pick Episode", "Start Adventure!"],
        "button functions": [goHowTo1, "", selectEpisode, goEpisode1],
        text: ["<p>Welcome to Pokemon Jr Adventures FLO.EX, a game where you and your children tell a story together!</p>",
            "<p>Tap on \"Setup\", \"Gameplay\", or \"Contest Rules\" to read instructions on how to play this game.</p>",
            "<p>Tap on \"Start Adventure!\" when you and your trainers are ready to begin!</p>",
            "<img class='large-image' src='./images/pikachu-and-mimikyu.png'>"]
    },
    {
        name: "Table of Contents",
        "button text": ["Home", "", "", "Next Page"],
        "button functions": [goHome, "", "", goHowTo2],
        text: ["<center><h1>Table of Contents</h1>",
            "<p><a onclick='goHowTo2()'>A Note For Parents</a></p>",
            "<p><a onclick='goHowTo3()'>Object</a></p>",
            "<p><a onclick='goHowTo4()'>Setup</a></p>",
            "<p><a onclick='goHowTo5()'>Gameplay</a></p>",
            "<p><a onclick='goHowTo6()'>Pokemon Contest Rules</a></p>",
            "<p><a onclick='goHowTo7()'>Pokemon Contest Example</a></p>",
            "<p><a onclick='goHowTo8()'>Telling Stories with Pokemon</a></p>",
            "<p><a onclick='selectEpisode()'>Select an Episode</a></p></center>"]
    },
    {
        name: "A Note to Parents",
        "button text": ["Home", "", "Previous Page", "Next Page"],
        "button functions": [goHome, "", goHowTo1, goHowTo3],
        text: ["<h1>A Note to Parents</h1>",
            "<p>In Pokemon Jr., you and your children tell a story together.  More important, your children have an active role in determining what happens and how the story ends.  Through this storytelling game your children exercise their minds and flex their imaginations.  The game stresses reading skills as well as imagination and creativity, but it does so in a fun and exciting way.  Plus, it features the popular characters from the Pokemon animated series and video games that many children know and love.</p>",
            "<p>Talk with children before playing.  Let them see how much they already know about Pokemon, and let them share that knowledge with you.</p>",
            "<p>Encourage questions and interaction.  This storytelling game works best when everyone contributes to the tale.</p>",
            "<p>Praise all efforts.  There are no right or wrong answers when creating a Pokemon story.</p>",
            "<p>Finally, have fun.  Enjoy this time with your children.  It's a story - act in characters and use different voices to describe the tale.  It's a game - encourage involvement and don't take it too seriously.</p>"]
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
            "<p><b>If this is your first game</b>... you're about to play <b>Episode 1: I Choose You!</b>  Find the following six Power Cards and place them where all the Trainers can see them: Bulbasaur, Charmander, Pikachu, and Squirtle. (There are two Bulbasaur and two Pikachu cards.)</p>",
            "<p><b>If you've already played Episode One</b>...  give each Trainer the Power Cards that match the Pokemon they've checked on their Checklists.  These are the Pokemon a Trainer has caught and added to his or her <b>team</b>.</p>"]
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
            "<h2>Pokemon Power Cards</h2>",
            "<img class='large-image' src='./images/power-cards.png'>",
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
            "<h2>Fainting</h2>",
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
        "button functions": [goHome, goHowTo2, goHowTo6, goEpisode1],
        text: ["<h1>Telling Stories with Pokemon Jr.</h1>",
            "<p>As Narrator, you get to use this Story App to present exciting Pokemon episodes to the Trainers.  Encourage the Trainers to participate and make stuff up.  You follow along, make stuff up too, and have fun!</p>",
            "<p>Each episode is divided into two sections: <b class='ra'>read-alouds</b> and <b class='gp'>gameplay</b>.</p>",
            "<p><b>Read-Alouds</b>  <b class='ra'>This text starts with the Narrator symbol.  Read it out loud to the Trainers.  Pause often to let the Trainers ask questions, provide additional details, and otherwise participate in the storytelling fun.  THere are no right or wrong answers to these questions.  Instead, they help the Trainers imagine the Pokemon world and add to the story.</b></p>",
            "<p><b>Gameplay</b>  <b class='gp'>This text is colored so that you know it is different from the read-aloud text.  Don't read this text out loud.  Instead, follow the gameplay advice it provides.  It tells you when to run Pokemon Contests and describes other game-related events.</b></p>",
            "<p>This symbol <img class='stop' src='./images/stop.webp'> means you've reached the end of an episode.  Beneath this image will be an option to return to the previous episode.</p>",
            "<p>Whenever you and the Trainers are ready, tap on \"Start Adventure!\" to start playing!</p>",
            "<p>If you're continuing a story, you may also continue it by selecting an episode: <a onclick='selectEpisode()'>Select An Episode</a></p>"
        ]
    },
    {
        name: "Pick A Chapter",
        "button text": ["Home", "Table of Contents", "",""],
        "button functions": [goHome, goHowTo2, "",""],
        text: ["<h1>Pick a Chapter</h1>",
            "<p><a onclick='goEpisode1()'>Episode 1: I Choose You!</a></p>",
            "<p><a onclick=''>Episode 2: Gotta Catch 'Em!</a></p>",
            "<p><a onclick=''>Episode 3: Spearow Trouble!</a></p>",
            "<p><a onclick=''>Episode 4: Viridian Forest</a></p>",
            "<p><a onclick=''>Episode 5: The Broken Bridge!</a></p>",
            "<p><a onclick=''>Episode 6: Mean Pidgey</a></p>",
            "<p><a onclick=''>Episode 7: Spearow Fury!</a></p>",
            "<p><a onclick=''>Episode 8: Pokemon Emergency!</a></p>",
            "<p><a onclick=''>Episode 9: Pokemon Hunting!</a></p>",
            "<p><a onclick=''>Episode 10: Camp Out!</a></p>",
            "<p><a onclick=''>Episode 11: Gary's Challenge!</a></p>",
            "<p><a onclick=''>Episode 12: Ambushed!</a></p>",
            "<p><a onclick=''>Episode 13: Pokemon Galore!</a></p>",
            "<p><a onclick=''>Episode 14: Samurai's Challenge!</a></p>",
            "<p><a onclick=''>Episode 15: Pewter City Contest!</a></p>",
            "<p><a onclick=''>Episode 16: Fire!</a></p>",
        ]
    }
];
//-------------------------EPISODES-------------------------
const episodes = [
    {
        episode: 1,
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode2],
        text: ["<h1>Episode 1: I Choose You!</h1>",
            "<p><b class='ra'>You and your friends are all Pokemon Trainers.  You want to become the best Pokemon Masters in the world!  But first you need a Pokemon.</b></p>",
            "<p><b class='ra'>You go to Professor Oak's lab to choose your starting Pokemon.</b></p>",
            "<p><b class='ra'>The lab is part of a larger building.  What does the lab look like?</b></p>",
            "<p><b class='ra'>There are computers and machines in the lab.  What else do you see?</b></p>",
            "<p><b class='gp'>While the Trainers are describing Professor Oak's lab, plcae the following Power Cards where all the Trainers can see them: Bulbasaur, Charmander, Pikachu, Squirtle, Bulbasaur, and Pikachu. (There are two Bulbasaur and two Pikachu cards, so two different Trainers can select a Bulbasaur or a Pikachu.)</b></p>",
            "<p><b class='ra'>\"Hello, my friends,\" Professor Oak says.  \"You may each select one Pokemon from among those you see here.  Choose wisely, for a Trainer's first Pokemon is very special.\"</b></p>",
            "<p><b class='gp'>The Trainer to the left of the Narrator selects first, then the Trainer to the left of the first Trainer, and so on until all of the Trainers have picked one Power Card.</b></p>",
            "<p><b class='gp'>Give each Trainer the Power Card he or she selected.  This is the Trainer's first Pokemon!</b></p>",
            "<p><b class='ra'>\"What good selections you have made,\" says Professor Oak.  \"Before I send you out into the world, let's have a practice Pokemon Contest.  Good luck, Trainers!\"</b></p>",
            "<p><b class='gp'>Pair the Trainers off against one another to play through this Pokemon Contest.  If there is an odd number of Trainers, you play Professor Oak.  THe Professor uses one of the remaining Pokemon Power Cards to face off against the Trainer who doesn't have an opponent.</b></p>",
            "<p><a onclick='goHowTo6()'><b class='ra'><u>Click here for Pokemon Contest rules.</u></b></a></p>",
            "<p><b class='gp'>Let each pair of Trainers battle until one of their Pokemon faints.  The Trainer whose Pokemon didn't faint is the winner of the training Contest.  If both Pokemon faint in the same round, the Contest ends in a tie.</b></p>",
            "<p><b class='ra'>\"Very good, Trainers,\" says Professor Oak.  Let's take your Pokemon next door to the Pokemon Center.  The nurses there will revive your fainted Pokemon.\"</b></p>",
            "<p><b class='ra'>The Pokemon Center is like a hospital for Pokemon.  How does the Pokemon Center revive Pokemon who are hurt or have fainted?</b></p>",
            "<p><b class='gp'>Pause to let the Trainers answer.</b></p>",
            "<p><b class='ra'>What do you do at the end of your first day as Pokemon Trainers?</b></p>",
            "<p><b class='gp'>Pause and let the Trainers answer.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'></center>",
        ]
    },
    {
        episode: 2,
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode3],
        text: ["<h1>Episode 2: Gotta Catch 'Em!</h1>",
            "<p><b class='ra'>The next day, Professor Oak leads you to the edge of Pallet Town.  \"Wild Pokemon live in the fields of long wavy grass outside of town,\" Professor Oak says.  \"I'll watch as you go into the grass and try to catch a Wild Pokemon.  But first, let me give you each a Pokemon Checklist.  Use it to keep track of which Pokemon you have caught.  Good luck, Trainers.\"</b></p>",
            "<p><b class='gp'>Give each Trainer one Pokemon Checklist.  A Trainer can write his or her name at the top and check off the Pokemon he or she received in Episode 1.</b></p>",
            "<img class='large-image' src='./images/grass-field.png'>",
            "<h2><b class='gp'>Pokemon Contest: Wild Battle!</p></h2>",
            "<p><b class='ra'>You walk into the long grass, trying to spot a Wild Pokemon.  The grass tickles your legs and it's hard to see very far, but you can hear things moving nearby.  Then you see it - A Wild Pokemon!</b></p>",
            "<p><b class='ra'>Will you send your Pokemon out to battle it?</b></p>",
            "<p><b class='gp'>To capture a Wild Pokemon, a Trainer must beat it in a Pokemon Contest.  There are as many Wild Pokemon as there are Trainers.  Let each Trainer pick a Power Card at random from the Power Deck.  That's the Wild Pokemon that Trainer is trying to capture.  Use the Wild Attack listed here instead of the powers listed on the Power Card.</b></p>",
            "<p><b class='gp'>Let each Trainer complete a Contest before going on to the next.  If the Trainer's Pokemon faints, that Wild Pokemon runs away.  If the Wild Pokemon faints, the Trainer adds that Power Card to his or her team.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "3",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin,""],
        text: ["<h1>Episode 3: Spearow Trouble!</h1>",
            "<p><b class='ra'>You and your Pokemon are relaxing and having fun at the Pallet Town Pokemon Center.</b></p>",
            "<p><b class='ra'>What are you doing?</b></p>",
            "<p><b class='ra'>What are your Pokemon doing?</b></p>",
            "<p><b class='ra'>Suddenly you hear a scary noise outside.  \"Speeeeeeeearow!\"</b></p>",
            "<p><b class='ra'>The strange cry fills the air.  The people of Pallet Town run and scren and cry.  A flock of Spearows dive and swoop out of the sky, pecking everyone it sees.</b></p>",
            "<p><b class='ra'>Does anyone know what a Spearow is?</b></p>",
            "<p><b class='gp'>A Spearow is a small, nasty bird with a ferocious temper.</b></p>",
            "<p><b class='ra'>\"You, there!  Pokemon Trainers!\"  Police Officer Jenny calls to you.  \"The town needs your help!  Will you send your Pokemon into battle?\"</b></p>",
            "<p><b class='ra'>Professor Oak appears beside you.  \"You can only use one Pokemon at a time in battle.  Which Pokemon will you choose?\"</b></p>",
            "<img class='large-image' src='./images/spearow-trouble.png'>",
            "<h2><b class='gp'>Pokemon Contest: Out of The Sky!</p></h2>",
            "<p><b class='gp'>To drive off the Spearow flock, the Trainers must hurt it for a total of 15 Hits.  When the flock receives 15 Hit Tokens, it flies away.  (The Trainers can't capture any of the Spearows.)</b></p>",
            "<p><b class='gp'>The Spearow flock attacks once each round.  If its attack is successful, ALL of the Pokemon fighting it receive 3 Hit Tokens.</b></p>",
            "<img class='large-image' src='./images/officer-jenny.png'>",
            "<p><b class='ra'>After the Spearow flock has been chased away, Police Officer Jenny walks toward you.  She smiles.  \"Thanks for helping out,\" she says.</b></p>",
            "<p><b class='ra'>What do you say to her?</b></p>",
            "<p><b class='ra'>\"While your Pokemon are being treated at the Pokemon Center after that great battle, I wanted to tell you to be on the look-out for Pokemon thieves,\" Officer Jenny says.  \"Be careful, and take good care of your Pokemon.  They're heroes here in Pallet Town!\"</b></p>",
            "<p><b class='ra'>A little while later, Professor Oak steps out of the Pokemon Center.  Your Pokemon follow him out, looking clean and refreshed.  \"Good work, Trainers,\" Professor Oak says.  \"I'm proud of you all.\"</b></p>",
            "<p><b class='ra'>What do you say to Professor Oak?</b></p>",
            "<p><b class='ra'>\"Now it's time for you to head out on your own and begin your journey,\" the Professor says.  \"I'm sure you are all going to become Pokemon Masters some day.  Good luck!\"</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
];//"<p><b class='gp'></b></p>",
//-------------------------ACTIONS-------------------------
const actions = [
    {
        name: "Roll Dice",
        "button text": ["Roll!", "Close"],
        "button functions": [diceRoll, closeActionScreen],
    },
    {
        name: "Flip Coin",
        "button text": ["Flip Coin!", "Close"],
        "button functions": [flipCoin, closeActionScreen],
    }
];


//---------------------
//-----INITIALIZE BUTTONS
//---------------------
button1.onclick = goHowTo1;
button2.onclick = goHowTo1;
button3.onclick = selectEpisode;
button4.onclick = goEpisode1;
action_button1.onclick = diceRoll;
action_button2.onclick = closeActions;


//---------------------
//-----UPDATE FUNCTION
//---------------------
function update(location){
    locationText.innerText = currentLocation;
    text.innerHTML = location.text.join(" ");
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome
};

function updateActions(action){
    action_button1.innerText = action["button text"][0];
    action_button2.innerText = action["button text"][1];
    action_button1.onclick = action["button functions"][0];
    action_button2.onclick = action["button functions"][1];
};


//---------------------
//-----GAMEPLAY FUNCTIONS
//---------------------
//---------------ACTIONS------------------
function openActionScreen(){
    actionScreen.classList.remove("fade-out");
    actionScreen.classList.add("fade-in");
    actionScreen.style.display = "flex";
};
function closeActionScreen(){
    actionScreen.classList.remove("fade-in");
    actionScreen.classList.add("fade-out");
    actionScreen.style.display = "none";
    action.innerText = "";
};
function openDice(){
    updateActions(actions[0]);
    openActionScreen();
};
function openCoin(){
    updateActions(actions[1]);
    openActionScreen();
};
function diceRoll(){
    let dice = Math.floor(Math.random() * 6) +1;
    action.innerText = dice;
};
function flipCoin(){
    let coin = ["Heads", "Tails"];
    let flip = Math.floor(Math.random() * coin.length);
    action.innerText = coin[flip];
};

//---------------HOME-------------------
function goHome(){
    currentLocation = "Home";
    update(locations[0]);
};
function goHowTo1(){ //table of contents
    update(locations[1]);
};

function goHowTo2(){ //a note to parents
    update(locations[2]);
};

function goHowTo3(){ //object
    update(locations[3]);
};

function goHowTo4(){ //setup
    update(locations[4]);
};

function goHowTo5(){ //gameplay
    update(locations[5]);
};

function goHowTo6(){ //pokemon contest rules
    update(locations[6]);
};

function goHowTo7(){ //pokemon contest example
    update(locations[7]);
};

function goHowTo8(){ //telling stories with pokemon
    update(locations[8]);
};

function selectEpisode(){
    update(locations[9]);
};

function startAdventure(){
    update(locations[10]);
};

//---------------EPISODES-------------------
function goLastEpisode(){
    update(episodes[lastEpisode]);
    lastEpisode --;
}

function goEpisode1(){
    currentLocation = "Professor Oak's Lab";
    update(episodes[0]);
};

function goEpisode2(){
    currentLocation = "Pallet Town";
    update(episodes[1]);
    lastEpisode = 0;
};

function goEpisode3(){
    currentLocation = "Pallet Town";
    update(episodes[2]);
    lastEpisode = 1;
};