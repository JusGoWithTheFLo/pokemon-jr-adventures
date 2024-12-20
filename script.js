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
        "button text": ["How-To", "", "Episode List", "Start Adventure!"],
        "button functions": [goHowTo1, "", selectEpisode, goEpisode1],
        text: ["<p>Welcome to Pokemon Jr Adventures FLO.EX, a game where you and your children tell a story together!</p>",
            "<p>Tap on \"How-To\" for instructions on how to play this game.</p>",
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
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo1, goHowTo1, goHowTo3],
        text: ["<h1>A Note to Parents</h1>",
            "<p>In Pokemon Jr., you and your children tell a story together.  More importantly, your children have an active role in determining what happens and how the story ends.  Through this storytelling game your children exercise their minds and flex their imaginations.  The game stresses reading skills as well as imagination and creativity, but it does so in a fun and exciting way.  Plus, it features the popular characters from the Pokemon animated series and video games that many children know and love.</p>",
            "<p>Talk with children before playing.  Let them see how much they already know about Pokemon, and let them share that knowledge with you.</p>",
            "<p>Encourage questions and interaction.  This storytelling game works best when everyone contributes to the tale.</p>",
            "<p>Praise all efforts.  There are no right or wrong answers when creating a Pokemon story.</p>",
            "<p>Finally, have fun.  Enjoy this time with your children.  It's a story - act in characters and use different voices to describe the tale.  It's a game - encourage involvement and don't take it too seriously.</p>"]
    },
    {
        name: "Object",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo1, goHowTo2, goHowTo4],
        text: ["<h1>Object</h1>",
            "<p>Kids play <b>Pokemon Trainers</b>, trying to catch Pokemon and solve problems presented in each episode.  A parent or other adult is the <b>Narrator</b> for each episode, using this Story App as a guide.</p>",]
    },
    {
        name: "Setup",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo1, goHowTo3, goHowTo5],
        text: ["<h1>Setup</h1>",
            "<p>The <b>Narrator</b> keeps this Story App and follows the directions for the episode being played.</p>",
            "<p><b>If this is your first game</b>... you're about to play <b>Episode 1: I Choose You!</b>  Find the following six Power Cards and place them where all the Trainers can see them: Bulbasaur, Charmander, Pikachu, and Squirtle. (There are two Bulbasaur and two Pikachu cards.)</p>",
            "<p><b>If you've already played Episode One</b>...  give each Trainer the Power Cards that match the Pokemon they've checked on their Checklists.  These are the Pokemon a Trainer has caught and added to his or her <b>team</b>.</p>"]
    },
    {
        name: "Gameplay",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo1, goHowTo4, goHowTo6],
        text: ["<h1>Gameplay</h1>",
            "<p>You're the <b>Narrator</b>.  You select an episode from the Story App and follow the directions.  You read part of a story to the Trainers.  The Trainers add details to the story by answering questions, describing actions, and selecting Pokemon from their teams to participate in <b>Pokemon Contests</b>.</p>",
            "<p>The Trainer to the left of the Narrator always acts first, followed by the other Trainers in order, left to right.</p>",
            "<p>When it's time for a Contest, refer to the Pokemon Contest rules described on the following page.</p>",
            "<p>An episode ends when the Trainers have overcome the obstacle or otherwise achieved the goal of the episode, or when all of the Pokemon on each Trainer's team have fainted.</p>",
            "<h2>Pokemon Power Cards</h2>",
            "<img class='large-image' src='./images/power-cards.png'>",
            "<h2>Pokemon Checklists</h2>",
            "<p>Each Trainer gets a <b>Pokemon Checklist</b> in Episode 2.  Whenever a Trainer catches a Pokemon, he or she checks the box next to its name.  The checked boxes show which Pokemon are on a Trainer's team.  Whenever you start a new episode, give each Trainer the Power Cards that correspond to the boxes checked on his or her Checklists.</p>"]
    },
    {
        name: "Pokemon Contest Rules",
        "button text": ["Home", "Table of Contents", "Previous Page", "Next Page"],
        "button functions": [goHome, goHowTo1, goHowTo5, goHowTo7],
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
            "<p>If it lands face down, there is no additional effect.</p>",
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
        "button functions": [goHome, goHowTo1, goHowTo6, goHowTo8],
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
        "button functions": [goHome, goHowTo1, goHowTo6, goEpisode1],
        text: ["<h1>Telling Stories with Pokemon Jr.</h1>",
            "<p>As Narrator, you get to use this Story App to present exciting Pokemon episodes to the Trainers.  Encourage the Trainers to participate and make stuff up.  You follow along, make stuff up too, and have fun!</p>",
            "<p>Each episode is divided into two sections: <b class='ra'>read-alouds</b> and <b class='gp'>gameplay</b>.</p>",
            "<p><b>Read-Alouds</b>  <b class='ra'>This text starts with the Narrator symbol<img class='narrator' src='./images/narrator.png'>.  Read it out loud to the Trainers.  Pause often to let the Trainers ask questions, provide additional details, and otherwise participate in the storytelling fun.  THere are no right or wrong answers to these questions.  Instead, they help the Trainers imagine the Pokemon world and add to the story.</b></p>",
            "<p><b>Gameplay</b>  <b class='gp'>This text is colored so that you know it is different from the read-aloud text.  Don't read this text out loud.  Instead, follow the gameplay advice it provides.  It tells you when to run Pokemon Contests and describes other game-related events.</b></p>",
            "<p>This symbol <img class='stop' src='./images/stop.webp'> means you've reached the end of an episode.  Beneath this image will be an option to return to the previous episode.</p>",
            "<p>Whenever you and the Trainers are ready, tap on \"Start Adventure!\" to start playing!</p>",
            "<p>If you're continuing a story, you may also continue it by selecting an episode: <a onclick='selectEpisode()'>Select An Episode</a></p>"
        ]
    },
    {
        name: "Pick A Chapter",
        "button text": ["Home", "Table of Contents", "",""],
        "button functions": [goHome, goHowTo1, "",""],
        text: ["<h1>Pick a Chapter</h1>",
            "<p><a onclick='goEpisode1()'>Episode 1: I Choose You!</a></p>",
            "<p><a onclick='goEpisode2()'>Episode 2: Gotta Catch 'Em!</a></p>",
            "<p><a onclick='goEpisode3()'>Episode 3: Spearow Trouble!</a></p>",
            "<p><a onclick='goEpisode4()'>Episode 4: Viridian Forest</a></p>",
            "<p><a onclick='goEpisode5()'>Episode 5: The Broken Bridge!</a></p>",
            "<p><a onclick='goEpisode6()'>Episode 6: Mean Pidgey</a></p>",
            "<p><a onclick='goEpisode7()'>Episode 7: Spearow Fury!</a></p>",
            "<p><a onclick='goEpisode8()'>Episode 8: Pokemon Emergency!</a></p>",
            "<p><a onclick='goEpisode9()'>Episode 9: Pokemon Hunting!</a></p>",
            "<p><a onclick='goEpisode10()'>Episode 10: Camp Out!</a></p>",
            "<p><a onclick='goEpisode11()'>Episode 11: Gary's Challenge!</a></p>",
            "<p><a onclick='goEpisode12()'>Episode 12: Ambushed!</a></p>",
            "<p><a onclick='goEpisode13()'>Episode 13: Pokemon Galore!</a></p>",
            "<p><a onclick='goEpisode14()'>Episode 14: Samurai's Challenge!</a></p>",
            "<p><a onclick='goEpisode15()'>Episode 15: Pewter City Contest!</a></p>",
            "<p><a onclick='goEpisode16()'>Episode 16: Fire!</a></p>",
            "<br><br><br><br><br>", //spaces so that the last episode(s) don't get covered by the control bar
        ]
    }
];
//-------------------------EPISODES-------------------------
const episodes = [
    {},
    {
        episode: 1,
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode2],
        text: ["<h1>Episode 1: I Choose You!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You and your friends are all Pokemon Trainers.  You want to become the best Pokemon Masters in the world!  But first you need a Pokemon.</b></p>",
            "<p><b class='ra'>You go to Professor Oak's lab to choose your starting Pokemon.</b></p>",
            "<p><b class='ra'>The lab is part of a larger building.  What does the lab look like?</b></p>",
            "<p><b class='ra'>There are computers and machines in the lab.  What else do you see?</b></p>",
            "<p><b class='gp'>While the Trainers are describing Professor Oak's lab, place the following Power Cards where all the Trainers can see them: Bulbasaur, Charmander, Pikachu, Squirtle, Bulbasaur, and Pikachu. (There are two Bulbasaur and two Pikachu cards, so two different Trainers can select a Bulbasaur or a Pikachu.)</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"Hello, my friends,\" Professor Oak says.  \"You may each select one Pokemon from among those you see here.  Choose wisely, for a Trainer's first Pokemon is very special.\"</b></p>",
            "<p><b class='gp'>The Trainer to the left of the Narrator selects first, then the Trainer to the left of the first Trainer, and so on until all of the Trainers have picked one Power Card.</b></p>",
            "<p><b class='gp'>Give each Trainer the Power Card he or she selected.  This is the Trainer's first Pokemon!</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"What good selections you have made,\" says Professor Oak.  \"Before I send you out into the world, let's have a practice Pokemon Contest.  Good luck, Trainers!\"</b></p>",
            "<p><b class='gp'>Pair the Trainers off against one another to play through this Pokemon Contest.  If there is an odd number of Trainers, you play Professor Oak.  THe Professor uses one of the remaining Pokemon Power Cards to face off against the Trainer who doesn't have an opponent.</b></p>",
            "<p><a onclick='goHowTo6()'><b class='gp'><u>Click here for Pokemon Contest rules.</u></b></a></p>",
            "<p><b class='gp'>Let each pair of Trainers battle until one of their Pokemon faints.  The Trainer whose Pokemon didn't faint is the winner of the training Contest.  If both Pokemon faint in the same round, the Contest ends in a tie.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"Very good, Trainers,\" says Professor Oak.  Let's take your Pokemon next door to the Pokemon Center.  The nurses there will revive your fainted Pokemon.\"</b></p>",
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
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The next day, Professor Oak leads you to the edge of Pallet Town.  \"Wild Pokemon live in the fields of long wavy grass outside of town,\" Professor Oak says.  \"I'll watch as you go into the grass and try to catch a Wild Pokemon.  But first, let me give you each a Pokemon Checklist.  Use it to keep track of which Pokemon you have caught.  Good luck, Trainers.\"</b></p>",
            "<p><b class='gp'>Give each Trainer one Pokemon Checklist.  A Trainer can write his or her name at the top and check off the Pokemon he or she received in Episode 1.</b></p>",
            "<img class='large-image' src='./images/grass-field.png'>",
            "<h2><b class='gp'>Pokemon Contest: Wild Battle!</p></h2>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You walk into the long grass, trying to spot a Wild Pokemon.  The grass tickles your legs and it's hard to see very far, but you can hear things moving nearby.  Then you see it - A Wild Pokemon!</b></p>",
            "<p><b class='ra'>Will you send your Pokemon out to battle it?</b></p>",
            "<p><b class='gp'>To capture a Wild Pokemon, a Trainer must beat it in a Pokemon Contest.  There are as many Wild Pokemon as there are Trainers.  Let each Trainer pick a Power Card at random from the Power Deck.  That's the Wild Pokemon that Trainer is trying to capture.  Use the Wild Attack listed here instead of the powers listed on the Power Card.</b></p>",
            "<p><b class='gp'>Let each Trainer complete a Contest before going on to the next.  If the Trainer's Pokemon faints, that Wild Pokemon runs away.  If the Wild Pokemon faints, the Trainer adds that Power Card to his or her team.</b></p>",
            "<p><b class='gp'>(6 HP) Wild Pokemon - Wild Attack - Roll 5, 6 - 2 Hits</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "3",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode4],
        text: ["<h1>Episode 3: Spearow Trouble!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You and your Pokemon are relaxing and having fun at the Pallet Town Pokemon Center.</b></p>",
            "<p><b class='ra'>What are you doing?</b></p>",
            "<p><b class='ra'>What are your Pokemon doing?</b></p>",
            "<p><b class='ra'>Suddenly you hear a scary noise outside.  \"Speeeeeeeearow!\"</b></p>",
            "<p><b class='ra'>The strange cry fills the air.  The people of Pallet Town run and scream and cry.  A flock of Spearows dive and swoop out of the sky, pecking everyone it sees.</b></p>",
            "<p><b class='ra'>Does anyone know what a Spearow is?</b></p>",
            "<p><b class='gp'>A Spearow is a small, nasty bird with a ferocious temper.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"You, there!  Pokemon Trainers!\"  Police Officer Jenny calls to you.  \"The town needs your help!  Will you send your Pokemon into battle?\"</b></p>",
            "<p><b class='ra'>Professor Oak appears beside you.  \"You can only use one Pokemon at a time in battle.  Which Pokemon will you choose?\"</b></p>",
            "<img class='large-image' src='./images/spearow-trouble.png'>",
            "<h2><b class='gp'>Pokemon Contest: Out of The Sky!</p></h2>",
            "<p><b class='gp'>To drive off the Spearow flock, the Trainers must hurt it for a total of 15 Hits.  When the flock receives 15 Hit Tokens, it flies away.  (The Trainers can't capture any of the Spearows.)</b></p>",
            "<p><b class='gp'>The Spearow flock attacks once each round.  If its attack is successful, ALL of the Pokemon fighting it receive 3 Hit Tokens.</b></p>",
            "<p><b class='gp'>(15 HP) Spearow Flock - Dive Attack - Roll 4, 5, 6 - 3 Hits</b></p>",
            "<img class='large-image' src='./images/officer-jenny.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>After the Spearow flock has been chased away, Police Officer Jenny walks toward you.  She smiles.  \"Thanks for helping out,\" she says.</b></p>",
            "<p><b class='ra'>What do you say to her?</b></p>",
            "<p><b class='ra'>\"While your Pokemon are being treated at the Pokemon Center after that great battle, I wanted to tell you to be on the look-out for Pokemon thieves,\" Officer Jenny says.  \"Be careful, and take good care of your Pokemon.  They're heroes here in Pallet Town!\"</b></p>",
            "<p><b class='ra'>A little while later, Professor Oak steps out of the Pokemon Center.  Your Pokemon follow him out, looking clean and refreshed.  \"Good work, Trainers,\" Professor Oak says.  \"I'm proud of you all.\"</b></p>",
            "<p><b class='ra'>What do you say to Professor Oak?</b></p>",
            "<p><b class='ra'>\"Now it's time for you to head out on your own and begin your journey,\" the Professor says.  \"I'm sure you are all going to become Pokemon Masters someday.  Good luck!\"</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "4",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode5],
        text: ["<h1>Episode 4: Viridian Forest</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Professor Oak points down the road.  \"That way leads to Viridian Forest,\" he says.  \"That's where you should begin your journey.  Good-bye!\"</b></p>",
            "<p><b class='ra'>What do you say to Professor Oak?</b></p>",
            "<p><b class='ra'>Then what do you do?</b></p>",
            "<p><b class='gp'>When the Trainers say they are heading for Viridian Forest, ask them what's around them.  Remember, there are no right or wrong answers.  Praise all efforts and encourage participation and imagination.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>What do you see and hear in the Forest?</b></p>",
            "<p><b class='ra'>What kinds of animals live in the Forest?</b></p>",
            "<p><b class='ra'>Is it scary in the Forest?  Are your Pokemon afraid?</b></p>",
            "<img class='large-image' src='./images/forest-day.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>As you travel through Viridian Forest, the sky gets dark and it starts to rain.</b></p>",
            "<p><b class='ra'>How does the rain feel?  Is it warm or cold?</b></p>",
            "<p><b class='ra'>What do you do while it's raining?</b></p>",
            "<p><b class='gp'>The Trainers can find a place to wait out the storm, or they can continue to walk through the forest.  At some point, they notice a few Wild Pokemon hiding nearby under some leaves.</b></p>",
            "<img class='large-image' src='./images/rain-pokemon.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Look!  THere are some Wild Pokemon taking shelter under those leaves.  They don't seem to like the rain.  They don't want to get wet.</b></p>",
            "<p><b class='gp'>Select a number of Power Cards at random from those remaining in the Power Card deck.  Draw one card for each Trainer playing this episode.</b></p>",
            "<p><b class='gp'>These are the Wild Pokemon the Trainers see.</b></p>",
            "<h2><b class='gp'>Pokemon Contest: Battle in the Rain!</p></h2>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Do you want to leave the Wild Pokemon alone?  Or do you want to try to capture them?</b></p>",
            "<p><b class='gp'>To capture a Wild Pokemon, a Trainer must beat it in a Pokemon Contest.  Let each Trainer pick the Pokemon that he or she wants to try to capture, starting with the Trainer to your left.  Use the Wild Attack listed below instead of the powers listed on the Power Card.</b></p>",
            "<p><b class='gp'>Let each Trainer complete a Contest before going on to the next.  If the Trainer's Pokemon faints, that Wild Pokemon runs away.  If the Wild Pokemon faints, the Trainer adds that Power Card to his or her team.</b></p>",
            "<p><b class='gp'>(8 HP) Wild Pokemon - Wild Attack - Roll 5, 6 - 3 Hits</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "5",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode6],
        text: ["<h1>Episode 5: The Broken Bridge!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>There's a river ahead of you.  A little boy sits at the edge of the river.  He looks very sad.</b></p>",
            "<p><b class='ra'>What does the little boy look like?</b></p>",
            "<p><b class='ra'>What do you say to the little boy?</b></p>",
            "<p><b class='gp'>After everyone has had a chance to add details to the story, the little boy speaks to the Trainers.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"Hi,\" the little boy says.  \"The storm knocked out the bridge, and now there's no way to cross the river.\"</b></p>",
            "<p><b class='ra'>The little boy stands up and points toward a tree near the river's edge.  \"Then we could walk across it.  Too bad I don't have any Pokemon.  They could push that tree down.\"</b></p>",
            "<p><b class='ra'>He looks back across the river and sighs.  \"That's why I'm going to Viridian City,\" the little boy says.  \"I'm going to become a Pokemon Trainer when I'm old enough.  If I can ever get there!\"</b></p>",
            "<p><b class='gp'>Let the Trainers talk with the little boy.  His name is Bobby.  Eventually, if the Trainers don't think of it themselves, Bobby asks them to send their Pokemon out to push over the tree and make a bridge.</b></p>",
            "<p><b class='gp'>The Trainers each send one Pokemon out to help build the bridge.  Each round, a Trainer selects one side of his or her Power Card and rolls the die.</b></p>",
            "<p><b class='gp'>It takes 15 Hits to push over the tree and form a makeshift bridge.  Once all of the Trainers have worked together to get 15 Hits, the tree is pushed over and stretched across the river.</b></p>",
            "<p><b class='gp'>With the bridge complete, the Trainers can cross to find their next adventure, and Bobby can continue on his way to Viridian City.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"That was so cool!\" Bobby says.  \"I can't wait to become a Pokemon Trainer and collect my own Pokemon team!\"</b></p>",
            "<p><b class='ra'>He turns to leave.  \"Thanks for helping me,\" Bobby says.  \"Maybe I'll see you at Viridian City.\"</b></p>",
            "<p><b class='ra'>Bobby crosses the river on the tree-bridge and disappears into the forest.  Now you can cross the river, too.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "6",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode7],
        text: ["<h1>Episode 6: Mean Pidgey</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The trip through the forest has been quiet.  You haven't seen any sign of other people or Pokemon.</b></p>",
            "<p><b class='ra'>Around the bend, tall grass grows across the path.  In the middle of the tall grass, you see a Pidgey.</b></p>",
            "<p><b class='ra'>The Pidgey looks mean.  It squawks at you, clawing the ground and pecking in your direction.  What do you want to do?</b></p>",
            "<img class='large-image' src='./images/pidgey-gust.png'>",
            "<h2><b class='gp'>Pokemon Contest: Angry Opponent!</p></h2>",
            "<p><b class='gp'>If any of the Trainers try to walk down the path, the Pidgey pecks at them and refuses to let them pass.</b></p>",
            "<p><b class='gp'>The only way to get past the Pidgey is to scare it into running away.  To do this, a Trainer's Pokemon must beat it in a Pokemon Contest.  If a Trainer's Pokemon faints, another Trainer must send a Pokemon out to challenge the Pidgey.</b></p>",
            "<p><b class='gp'>When the Pidgey takes enough Hit Tokens to equal or exceed its Hit Point total, it flies away into the trees.  Then the Trainers can continue on their way.</b></p>",
            "<p><b class='gp'>(10 HP) Mean Pidgey - Gust Attack - Roll 2, 3, 4, 5, 6 - 3 Hits</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "7",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode8],
        text: ["<h1>Episode 7: Spearow Fury!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You hear the sound of battle up ahead.  It sounds like a lot of Pokemon are fighting.  The path curves around a thick clump of trees.  There, in the clearing ahead, a lone Pikachu battles against a flock of Spearows.  It looks like the same flock you fought in Pallet Town!</b></p>",
            "<p><b class='ra'>The poor Pikachu falls to the forest floor, but the Spearows keep pecking and diving and clawing at the hurt Pokemon.</b></p>",
            "<p><b class='ra'>What are you going to do?</b></p>",
            "<img class='large-image' src='./images/pikachu-shocked.png'>",
            "<p><b class='gp'>The Trainers should decide to help the injured Pikachu.  If they don't want to help, the poor Pikachu calls to them.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"Pika?\" the hurt Pikachu calls, obviously asking for your help as another Spearow pecks at him.</b></p>",
            "<p><b class='gp'>The Trainers must drive off the Spearow flock in order to get close to the injured Pikachu.</b></p>",
            "<p><b class='gp'>To drive off the Spearow flock, the Trainers must hurt it for a total of 15 Hits.  When the flock receives 15 Hit Tokens, it flies away.</b></p>",
            "<p><b class='gp'>The Spearow flock attacks once each round.  If its attack is successful, ALL of the Pokemon fighting it receive 4 Hit Tokens.</b></p>",
            "<h2><b class='gp'>Pokemon Contest: Terrible Wings!</p></h2>",
            "<p><b class='gp'>After the flock receives 15 Hit Tokens and flies away, the Trainers can approach the hurt Pikachu.</b></p>",
            "<p><b class='gp'>(15 HP) Spearow Flock - Fury Attack - Roll 5, 6 - 4 Hits</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The Pikachu looks like it has been hurt very badly.  It needs help!  Viridian City is close by.  It has a Pokemon Center.  Will you take Pikachu to Viridian City?</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "8",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode9],
        text: ["<h1>Episode 8: Pokemon Emergency!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You rush the hurt Pikachu into Viridian City.  A police officer stops you.</b></p>",
            "<p><b class='ra'>\"What's the big hurry?\" Officer Jenny asks.</b></p>",
            "<p><b class='ra'>What do you say to Police Officer Jenny?</b></p>",
            "<p><b class='gp'>Give the Trainers a chance to tell Officer Jenny what happened to the poor Pikachu.  Then...</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"Why didn't you say so?\" asks Officer Jenny.  \"That's a genuine Pokemon emergency!  Follow me.  I'll get you to the Pokemon Center!\"</b></p>",
            "<p><b class='ra'>The Viridian City Pokemon Center is a lot bigger than the one in Pallet Town.  Officer Jenny leads you inside to the front desk.</b></p>",
            "<p><b class='ra'>Are there a lot of people in the Pokemon Center?  What are they doing?</b></p>",
            "<p><b class='ra'>A nurse rushes over to help you.  \"This Pikachu is badly hurt,\" Nurse Joy says.  \"Wait here while we take care of this poor Pokemon.  He'll be better in no time.\"</b></p>",
            "<p><b class='ra'>What does Nurse Joy do to help the injured Pikachu?  What do you do while you're waiting?</b></p>",
            "<img class='large-image' src='./images/pikachu-injured.png'>",
            "<p><b class='gp'>If there is still a Pikachu Power Card remaining in the deck, then one of the Trainers gets to add this Pikachu to his or her team.  To decide who gets to keep this Pikachu, have everyone roll the die.  Pikachu joins the team of the Trainer with the highest roll.</b></p>",
            "<p><b class='gp'>If both Pikachu cards are already in play, then the Pokemon Center keeps this Pikachu.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Nurse Joy returns after a while and says, \"That Pikachu was hurt pretty badly.  It's a good thing you got him here as quickly as you did.  He'll be fine now.\"</b></p>",
            "<p><b class='gp'>Nurse Joy gives the Pikachu to one of the Trainers, if the card is available.  If not, she tells the Trainers that the Pikachu needs to rest here for a few days.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Suddenly, two Poke Balls crash through the glass roof of the Pokemon Center.  Clouds of thick, green smoke begin to fill the room.</b></p>",
            "<p><b class='ra'>Two Pokemon emerge from the smoke.  The first floats in the air, and the smoke comes from its own body.</b></p>",
            "<p><b class='ra'>\"Koffing!\" it says in a deep voice.</b></p>",
            "<p><b class='ra'>The other is a big purple snake.</b></p>",
            "<p><b class='ra'>\"Ekans!\" it hisses.</b></p>",
            "<p><b class='ra'>The smoke clears, and two teenagers step into the room.  One is a boy, and the other is a girl.  They wear white uniforms and black boots.  There's a letter \"R\" on their shirts.  Between them stands a catlike Pokemon.</b></p>",
            "<p><b class='ra'>\"Allow us to introduce ourselves,\" says the boy.</b></p>",
            "<p><b class='ra'>\"To protect the world from devastation,\" says the girl.</b></p>",
            "<p><b class='ra'>\"To unite all peoples within our nation,\" says the boy.</b></p>",
            "<img class='large-image' src='./images/team-rocket-enter.png'>",
            "<p><b class='ra'>\"To denounce the evils of truth and love,\" says the girl.</b></p>",
            "<p><b class='ra'>\"To extend our reach to the stars above,\" says the boy.</b></p>",
            "<p><b class='ra'>\"Jessie!\" says the girl.</b></p>",
            "<p><b class='ra'>\"James!\" says the boy.</b></p>",
            "<p><b class='ra'>\"Team Rocket - blast off at the speed of light!\"</b></p>",
            "<p><b class='ra'>\"Surrender now, or prepare to fight.\"</b></p>",
            "<p><b class='ra'>\"Meowth! That's right!\" says Meowth, the catlike Pokemon.</b></p>",
            "<p><b class='ra'>\"We're here for your Pokemon,\" says James.</b></p>",
            "<img class='large-image' src='./images/koffing-enter-lg.png'><br>",
            "<h2><b class='gp'>Pokemon Contest: Teams vs. Team!</p></h2>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The evil Team Rocket has broken into the Pokemon Center!  They want to steal all the Pokemon - including yours!</b></p>",
            "<p><b class='ra'>\"Koffing!\" says the floating Pokemon as thick, green smoke billows from it.</b></p>",
            "<p><b class='ra'>\"Ekans!\" hisses the snake Pokemon as it slither toward you.</b></p>",
            "<p><b class='ra'>Will you send your Pokemon into battle?</b></p>",
            "<p><b class='gp'>To protect the Pokemon Center, the Trainers must defeat Team Rocket's Pokemon.  Koffing and Ekans fight side by side, inflicting Hits on ALL good Pokemon that challenge them.</b></p>",
            "<p><b class='gp'>The pair of evil Pokemon attacks once each round.  If the attack is successful, ALL of the Pokemon fighting them receive 3 Hit Tokens.</b></p>",
            "<p><b class='gp'>(18 HP) Koffing & Ekans - Team Attack - Roll 5, 6 - 3 Hits</b></p>",
            "<img class='large-image' src='./images/ekans-enter.png'>",
            "<p><b class='gp'>If all of the Trainers' Pokemon faint, Team Rocket steals everything but the Trainers' starting Pokemon.  Erase all but one check from each Trainer's Checklist.</b></p>",
            "<p><b class='gp'>If the Trainers' Pokemon inflict 18 Hits on the evil Pokemon, Team Rocket calls them back into their Poke Balls.  THen Team Rocket turns and runs away.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "9",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode10],
        text: ["<h1>Episode 9: Pokemon Hunting!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You leave Viridian City behind and head out into the forest.  It isn't long before you come upon a field of tall grass.  Maybe there are Wild Pokemon here!  It would be great to catch another Pokemon to add to your team.</b></p>",
            "<p><b class='ra'>Do you want to go hunting in the tall grass?</b></p>",
            "<p><b class='gp'>Each Trainer who wants to go hunting flips the Pokecoin.  If the HEADS side lands face up, that Trainer has spotted a Wild Pokemon.  If the TAILS side lands face up, that Trainer doesn't find any Pokemon.</b></p>",
            "<img class='large-image' src='./images/rattata-grass.png'>",
            "<h2><b class='gp'>Pokemon Contest: In The Tall Grass!</p></h2>",
            "<p><b class='gp'>To capture a Wild Pokemon, a Trainer must beat it in a Pokemon Contest.  Let each Trainer who spots a Wild Pokemon pick a Power Card at random from the Power Deck.  That's the Wild Pokemon that Trainer is trying to capture.  Use the Wild Attack listed below instead of the powers listed on the Power Card.</b></p>",
            "<p><b class='gp'>Let each Trainer complete a Contest before going on to the next.  If the Trainer's Pokemon faints, that Wild Pokemon runs away.  If the Wild Pokemon faints, the Trainer adds that Power Card to his or her team.</b></p>",
            "<p><b class='gp'>(8 HP) Wild Pokemon - Wild Attack - Roll 4, 5, 6 - 3 Hits</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "10",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode11],
        text: ["<h1>Episode 10: Camp Out!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>You've been walking all day and now it is time to rest for the night.  You find a nice campsite just before the sun starts to set.</b></p>",
            "<img class='large-image' src='./images/path-evening.png'>",
            "<p><b class='ra'>The campsite is near a bubbling brook.  What else is around and near the campsite?</b></p>",
            "<p><b class='ra'>What do you do when you camp out?</b></p>",
            "<p><b class='gp'>Let the Trainers have a chance to describe the camp and tell each other what they do to rest and relax.  When everyone has had a chance, they spot a strange sight flying over the trees...</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Just before darkness falls over the forest, you hear a voice call from far above you.  Up in the sky, you see a strange balloon.  It's shaped like that catlike Pokemon that was hanging out with Team Rocket.</b></p>",
            "<img class='large-image' src='./images/team-rocket-balloon.png'>",
            "<p><b class='ra'>As the balloon drifts by, you see that there are people in the basket that hangs below it.  It's Team Rocket!</b></p>",
            "<p><b class='ra'>\"Sleep tight, little Trainers,\" Jessie calls down.</b></p>",
            "<p><b class='ra'>\"Protect those Pokemon,\" James says.  \"We'll take them from you soon enough!\"</b></p>",
            "<p><b class='ra'>\"Meowth!  That's right!\" says Meowth.</b></p>",
            "<p><b class='ra'>What do you say to Team Rocket as they drift out of sight?</b></p>",
            "<p><b class='ra'>Your Pokemon seem a little scared.  What do you say to them so they can sleep tonight?</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "11",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode12],
        text: ["<h1>Episode 11: Gary's Challenge!</h1>",
            "<img class='large-image' src='./images/gary-forest.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The next day Gary Oak, Professor Oak's grandson, waits for you along the forest path.</b></p>",
            "<p><b class='ra'>\"I've been hearing a lot about you,\" Gary says.  \"I don't think you're as hot as some people say you are.  Let's find out.  I challenge the best among you to a Pokemon Contest!\"</b></p>",
            "<p><b class='ra'>Do any of you want to accepts Gary's challenge?</b></p>",
            "<p><b class='gp'>Only one Trainer can accept Gary's challenge.  If more than one Trainer wants to battle him, have them roll the die.  The Trainer with the highest die roll gets to participate in this challenge.</b></p>",
            "<h2><b class='gp'>Pokemon Contest: Sandshrew Attacks!</p></h2>",
            "<p><b class='gp'>Gary only uses one Pokemon in the Contest.  He uses Sandshrew.  The Trainer who challenges him can switch Pokemon until one of his or her Pokemon faints.</b></p>",
            "<p><b class='gp'>If Gary wins the challenge, he says, \"I knew you Trainers were losers.\"  Then he leaves.</b></p>",
            "<p><b class='gp'>If the Trainer wins the challenge, Gary says, \"Pretty good.  I guess that what they're saying about you is true.\"  Then he leaves.</b></p>",
            "<p><b class='gp'>(9 HP) Gary's Sandshrew - Fury Swipes - Roll 4, 5, 6 - 2 Hits - and Flip Pokecoin 2 More Hits</b></p>",
            "<img class='large-image' src='./images/sandshrew.png'>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "12",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode13],
        text: ["<h1>Episode 12: Ambushed!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The forest path winds peacefully between the trees.  It's a nice day.</b></p>",
            "<p><b class='ra'>What is this nice day like?</b></p>",
            "<p><b class='ra'>You continue your walk through the forest when suddenly the ground doesn't feel right.  That's because you're standing over a big hole that was covered over with grass.  You all fall into the deep hole!  You can see Team Rocket looking down at you from the top of the hole.</b></p>",
            "<img class='large-image' src='./images/team-rocket-hole.png'>",
            "<p><b class='ra'>\"That worked splendidly!\" Jessie says from up above.</b></p>",
            "<p><b class='ra'>\"I knew it would!\" says James from atop the hole.</b></p>",
            "<p><b class='ra'>\"Hey, I bet those Trainers have lots of rare and unusual Pokemon.  Meowth!\" says Meowth.</b></p>",
            "<p><b class='ra'>\"You down there,\" Jessie calls.  \"If you give us your Pokemon, we'll help you climb out of there.\"</b></p>",
            "<p><b class='ra'>What do you say to Jessie and James?</b></p>",
            "<p><b class='gp'>The Trainers probably won't give up their Pokemon to Jessie and James.  They can use their Pokemon to get out of the hole, though.</b></p>",
            "<p><b class='gp'>Each Trainer can select one Pokemon.  The Pokemon team up to dig handholds in the dirt wall of the deep hold.  When they have worked together to get 18 Hits, the Pokemon have dug enough handholds that the Trainers can use them to climb out of the hole.  It's almost as good as having a ladder!  When Team Rocket sees that the Trainers are close to escaping, Jesse, James, and Meowth run away.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "13",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode14],
        text: ["<h1>Episode 13: Pokemon Galore!</h1>",
            "<h2><b class='gp'>Pokemon Contest: It's A Crowd!</p></h2>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The clearing ahead is extremely crowded.  There are dozens of Wild Pokemon lying around in the sun!  This is a great opportunity to add some Wild Pokemon to your teams - if you can beat them in a Contest!</b></p>",
            "<p><b class='ra'>Do you want to try to catch a Wild Pokemon?</b></p>",
            "<p><b class='gp'>To capture a Wild Pokemon, a Trainer must beat it in a Pokemon Contest.  Let each Trainer who spots a Wild Pokemon pick a Power Card at random from the Power Deck.  That's the Wild Pokemon that Trainer is trying to capture.  Use the Wild Attack listed below instead of the powers listed on the Power Card.</b></p>",
            "<p><b class='gp'>Let each Trainer complete a Contest before going on to the next.  If the Trainer's Pokemon faints, that Wild Pokemon runs away.  If the Wild Pokemon faints, the Trainer adds that Power Card to his or her team.</b></p>",
            "<p><b class='gp'>(8 HP) Wild Pokemon - Wild Attack - Roll 4, 5, 6 - 3 Hits - and Flip Pokecoin 1 More Hits</b></p>",
            "<img class='large-image' src='./images/pokedex-bulbasaur.png'>",
            "<br><center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "14",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode15],
        text: ["<h1>Episode 14: Samurai's Challenge!</h1>",
            "<img class='large-image' src='./images/samurai-bug-catcher.png'>",
            "<h2><b class='gp'>Pokemon Contest: Growlithe Attacks!</p></h2>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>A kid dressed as a Samurai steps out of the trees.  \"I challenge the best among you to a friendly Pokemon Contest, one Trainer to another,\" he says.</b></p>",
            "<p><b class='ra'>Do any of you want to accept the Samurai's challenge?</b></p>",
            "<p><b class='gp'>Only one Trainer can accept the Samurai's challenge.  If more than one Trainer wants to battle his Pokemon, have them roll the die.  The Trainer with the highest die roll gets to participate in the challenge.  The Samurai sends Growlithe out to battle!</b></p>",
            "<p><b class='gp'>(8 HP) Samurai's Growlithe - Bite - Roll 3, 4, 5, 6 - 2 Hits - and Flip Pokecoin 1 More Hits</b></p>",
            "<img class='large-image' src='./images/growlithe-block.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>After the challenge, the Samurai says, \"Thank you for practicing with me.\"  Then he leaves.</b></p>",
            "<center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "15",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, goEpisode16],
        text: ["<h1>Episode 15: Pewter City Contest!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>After a lot of walking through the forest, you finally reach Pewter City.</b></p>",
            "<p><b class='ra'>What's in this city?  What kinds of stores?  What kinds of restaurants?  What else do you see?</b></p>",
            "<p><b class='ra'>The Pokemon Center is easy to find.  It's a great place to rest after your long journey.</b></p>",
            "<p><b class='ra'>\"Welcome to the Pewter City Pokemon Center,\" the nurse at the front desk says.  \"Do you have any Pokemon that need to be revived?\"</b></p>",
            "<p><b class='gp'>Any Pokemon that fainted during the long journey from Viridian City to Pewter City can be rejuvenated here at the Pokemon Center.  The nurse gladly takes any of them for treatment and healing.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>While you are waiting, Nurse Joy brings you food and drinks.</b></p>",
            "<p><b class='ra'>What kind of food and drinks does she bring?</b></p>",
            "<p><b class='ra'>\"What brings you to Pewter City?\" Nurse Joy asks.</b></p>",
            "<p><b class='gp'>After the Trainers finish telling her about their adventures, Nurse Joy has an idea.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"You should go to the Pewter City Gym,\" Nurse Joy says.  \"I bet the gym leader can teach you a lot about being Pokemon Trainers.\"</b></p>",
            "<img class='large-image' src='./images/gym-pewter-city.png'>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>Later, at the Pewter City Gym, you meet Brock.  He's the gym leader.</b></p>",
            "<p><b class='ra'>\"Hi.  Welcome to my gym,\" Brock says.  \"So you want to practice your Pokemon against my Pokemon?  Okay, but you asked for it!\"</b></p>",
            "<img class='large-image' src='./images/brock-onix.png'>",
            "<h2><b class='gp'>Pokemon Contest: Onix Attacks!</p></h2>",
            "<p><b class='gp'>Brock allows each Trainer to challenge his Pokemon, but they must battle it one at a time.  Brock uses Onix.  After each match, Brock Heals Onix and returns any Hit Tokens it received to the Hit Token pile.  To beat it, each Trainer's Pokemon must Hit it for a number of Hit Tokens equal to or greater than its Hit Point total.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"This is a tough Contest,\" Brock says.  \"Remember, this is just a training Contest.  It's okay to lose.  Every challenge teaches us something new.\"</b></p>",
            "<p><b class='gp'>(12 HP) Brock's Onix - Slam - Roll 4, 5, 6 - 4 Hits - and Flip Pokecoin 1 More Hits</b></p>",
            "<br><center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
    {
        episode: "16",
        "button text": ["Home","Dice Roll", "Coin Flip", "Next Episode!"],
        "button functions": [goHome, openDice, openCoin, ""],
        text: ["<h1>Episode 16: Fire!</h1>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>After the training contest with Brock, you go back to the Pewter City Pokemon Center to rest.  Your Pokemon are revived, and you get to eat and wash up.  Later, you hear a call for help.  The call for help comes from outside.  You run to the door and see that a nearby building is on fire!</b></p>",
            "<p><b class='ra'>What kind of building is it?  Why is fire dangerous?  Are you scared?</b></p>",
            "<p><b class='ra'>Officer Jenny notices you and comes running over.  \"Hey!\" she says.  \"Will you send your Pokemon to help put out the fire?\"</b></p>",
            "<img class='large-image' src='./images/officer-jenny-salute.png'>",
            "<p><b class='gp'>Each Trainer can select one Pokemon.  The Pokemon team up to put out the fire.  Ask the Trainers what the Pokemon are doing.  Some could be tossing dirt or water on the fire, for example.  This is a good opportunity to help teach the Trainers about the dangers of fire while also telling an exciting story.</b></p>",
            "<p><b class='gp'>When the Pokemon have worked together to get 16 Hits, they have extinguished the fire.</b></p>",
            "<p><b class='gp'>However, the fire is dangerous.  It's hot and smoky and hurts the pokemon.  Every round, flip the Pokecoin.  If the TAILS side lands face up, each Pokemon battling the fire receives 2 Hit Tokens.</b></p>",
            "<p><b class='gp'>If ALL of the Pokemon fighting the fire faint before the fire is put out, then Brock and the members of the Pewter City Gym arrive to save the day.</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>The fire was only a trick!  While you were helping to put it out, Team Rocket has sneaked up on you!</b></p>",
            "<img class='large-image' src='./images/team-rocket-enter.png'>",
            "<p><b class='ra'>\"To protect the world from devastation,\" says Jessie.</b></p>",
            "<p><b class='ra'>\"To unite all peoples within our nation,\" says James.</b></p>",
            "<p><b class='ra'>\"To denounce the evils of truth and love,\"</b></p>",
            "<p><b class='ra'>\"To extend our reach to the stars above,\"</b></p>",
            "<p><b class='ra'>\"Jessie!\"</b></p>",
            "<p><b class='ra'>\"James!\"</b></p>",
            "<p><b class='ra'>\"Team Rocket - blast off at the speed of light!\" says Jessie</b></p>",
            "<p><b class='ra'>\"Surrender now, or prepare to fight.\" Says James</b></p>",
            "<p><b class='ra'>\"Meowth! That's right!\" says Meowth</b></p>",
            "<p><b class='ra'>\"This is your last chance,\" James says, pulling a Poke Ball from his belt.</b></p>",
            "<p><b class='ra'>\"We want your Pokemon,\" Jessie says, holding a Poke Ball of her own.</b></p>",
            "<p><b class='ra'>\"And we'll take them by force if necessary,\" says Meowth as Jessie and James toss their Poke Balls.</b></p>",
            "<p><b class='ra'>\"Koffing!\" says the first Pokemon to emerge in a cloud of thick, green smoke.</b></p>",
            "<p><b class='ra'>\"Ekans!\" hisses the second as it slithers from its Poke Ball.</b></p>",
            "<p><b class='ra'>\"Meowth!\" says Meowth, leaping to join them.</b></p>",
            "<p><b class='ra'>Will you send your Pokemon into battle?</b></p>",
            "<img class='large-image' src='./images/team-rocket-koffing-meowth-ekans.png'>",
            "<h2><b class='gp'>Pokemon Contest: Onix Attacks!</p></h2>",
            "<p><b class='gp'>Koffing, Ekans, and Meowth fight side by side, inflicting Hits on ALL Pokemon that challenge them.</b></p>",
            "<p><b class='gp'>The trio of evil Pokemon attacks ONCE each round.  If the attack is successful, ALL of the Pokemon fighting them receive 3 Hit Tokens.</b></p>",
            "<p><b class='gp'>If all of the Trainers' Pokemon faint, Team Rocket steals everything but their starting Pokemon.</b></p>",
            "<p><b class='gp'>If the Trainers' Pokemon inflict 22 Hits on the evil Pokemon, Team Rocket calls them back and runs away.</b></p>",
            "<p><b class='gp'>(22 HP) Koffing, Ekans, & Meowth - Team Attack - Roll 4, 5, 6 - 3 Hits</b></p>",
            "<p><img class='narrator' src='./images/narrator.png'><b class='ra'>\"We'll be back,\" Jessie and James say as they run away.</b></p>",
            "<p><b class='ra'>\"Yay!\" says Officer Jenny.</b></p>",
            "<p><b class='ra'>\"Good job!\" says Brock.  And Nurse Joy throws a party for everyone at the Pokemon Center!</b></p>",
            "<br><center><img class='stop' src='./images/stop.webp'><br>",
            "<a onclick='goLastEpisode()'>Previous Episode</a></center>"
        ]
    },
];//"<p><b class='gp'></b></p>",
/*
//-------------------------ITEMS-------------------------
const items = [
    //---------------------
    //-----HEAL
    //---------------------
    {
        heal = [
            {
                name: "Max Potion",
                qty: 0,
                effect: "Fully restores HP.",
            },
            {
                name: "Max Revive",
                qty: 0,
                effect: "Revives a fainted Pokémon, fully restoring its HP.",
            },
            {
                name: "Potion",
                qty: 0,
                effect: "Restores 2 HP.",
            },
            {
                name: "Revive",
                qty: 0,
                effect: "Revives a fainted Pokémon, restoring half its HP.",
            },
        ]
    },
    //---------------------
    //-----POKEBALLS
    //---------------------
    {
        pokeballs = [
            {
                name: "Pokeball",
                qty: 0,
                effect: "Catches wild Pokémon.",
            }
        ]
    }
]
*/

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

/*
TOGGLE CONTROL BAR
    {
        name: "Episode Controls",
        "button text": ["Home", "Bag", "Actions", "Next Episode"],
        "button functions": [goHome, openBag, openActions, ""],
    },

    {
        name: "Actions Controls",
        "button text": ["Back", "Dice Roll", "Coin Flip", ""],
        "button functions": [goHome, openBag, openActions, ""],
    },

    {
        name: "Bag Controls",
        "button text": ["Back", "Players Info", "Coin Flip", ""],
        "button functions": [goHome, openBag, openActions, ""],
    },

    {
        name: "Players Info Controls",
        "button text": ["Back", player[1].name, player[2].name, player[2].name],
        "button functions": [goHome, openBag, openActions, ""],
    },


PLAYER INFO

*/

//---------------------
//-----INITIALIZE BUTTONS
//---------------------
button1.onclick = goHowTo1;
button2.onclick = goHowTo1;
button3.onclick = selectEpisode;
button4.onclick = goEpisode1;
action_button1.onclick = diceRoll;
action_button2.onclick = closeActionScreen;


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
    update(episodes[1]);
};

function goEpisode2(){
    currentLocation = "Pallet Town";
    update(episodes[2]);
    lastEpisode = 1;
};

function goEpisode3(){
    currentLocation = "Pallet Town";
    update(episodes[3]);
    lastEpisode = 2;
};


function goEpisode4(){
    currentLocation = "Viridian Forest";
    update(episodes[4]);
    lastEpisode = 3;
};

function goEpisode5(){
    currentLocation = "Viridian Forest";
    update(episodes[5]);
    lastEpisode = 4;
};

function goEpisode6(){
    currentLocation = "Viridian Forest";
    update(episodes[6]);
    lastEpisode = 5;
};

function goEpisode7(){
    currentLocation = "Viridian Forest";
    update(episodes[7]);
    lastEpisode = 6;
};

function goEpisode8(){
    currentLocation = "Viridian City";
    update(episodes[8]);
    lastEpisode = 7;
};

function goEpisode9(){
    currentLocation = "Viridian Forest";
    update(episodes[9]);
    lastEpisode = 8;
};

function goEpisode10(){
    currentLocation = "Viridian Forest";
    update(episodes[10]);
    lastEpisode = 9;
};

function goEpisode11(){
    currentLocation = "Viridian Forest";
    update(episodes[11]);
    lastEpisode = 10;
};

function goEpisode12(){
    currentLocation = "Viridian Forest";
    update(episodes[12]);
    lastEpisode = 11;
};

function goEpisode13(){
    currentLocation = "Viridian Forest";
    update(episodes[13]);
    lastEpisode = 12;
};

function goEpisode14(){
    currentLocation = "Viridian Forest";
    update(episodes[14]);
    lastEpisode = 13;
};

function goEpisode15(){
    currentLocation = "Pewter City";
    update(episodes[15]);
    lastEpisode = 14;
};

function goEpisode16(){
    currentLocation = "Pewter City";
    update(episodes[16]);
    lastEpisode = 15;
};

