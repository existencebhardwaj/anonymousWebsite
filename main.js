
var dice = document.getElementById("randommsg")
var msg  = document.getElementById("msgbox")
msg.textContent = "";
var question = ["Ngl, what's the most beautiful place you've ever been to?",
"If you could trade lives with anyone for a day, who would it be and why?",
"Ngl, what's your favorite board game or card game?",
"What's the best piece of advice you've ever given someone, ngl?",
"If you had to describe your perfect day, what would it look like?",
"Ngl, do you believe in aliens or extraterrestrial life?",
"What's your favorite way to spend time outdoors, ngl?",
"If you could have any animal as a pet, which one would you choose?",
"Ngl, what's the most memorable concert or live event you've attended?",
"If you could learn a new language instantly, which one would you pick?",
"What's the most unusual or interesting job you've heard of, ngl?",
"Ngl, do you have a favorite quote or mantra that inspires you?",
"If you were a character in a book or movie, what kind of character would you be?",
"Ngl, what's the best piece of advice you've received from someone else?",
"What's the most daring thing you've ever done, ngl?",
"If you could have a meal with any historical figure, who would it be?",
"Ngl, what's your favorite type of dessert or sweet treat?",
"If you could possess a talent in any art form, what would you choose?",
"Ngl, what's something you've always wanted to try but haven't had the chance?",
"If you could travel back in time to any era, which one would you visit?"]


function randomSelector() {
    return question[(Math.floor(Math.random() * question.length))];
}

function randommsg()
{
    msg.textContent = randomSelector()
}

// randommsg()
