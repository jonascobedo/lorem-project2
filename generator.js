// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "I'll tell you about it some time, the time we left.",
      "I'm at a loss, I'm at a loss, losing grip, the fabrics rip.",
      "You were always my last second, last ride in the distance.",
      "I'll still destroy you some day, sleep well beast, you as well beast.",
      "You feel like a hundred times yourself.",
      "This is the last time.",
      "Oh, but your love is such a swamp.",
      "Can't get these thoughts out of me.",
      "Jenny, I am in trouble.",
      "Today you were far away and I didn't ask you why.",
      "How close am I to losing you.",
      "Hey, are you awake. Yeah I'm right here. Well, can I ask you about today.",
      "You just walked away, and I just watched you.",
      "You get mistaken for strangers by your own friends.",
      "Another uninnocent, elegant fall into the unmagnificent lives of adults.",
      "Arm in arm in arm and eyes and eyes glazing under.",
      "We're half awake in a fake empire.",
      "Turn the light out say goodnight, no thinking for a little while.",
      "Let's not try to figure out everything at once.",
      "It's hard to keep track of you falling through the sky.",
      "It's a terrible love that I'm walking with spiders.",
      "It's quiet company.",
      "It takes an ocean not to break.",
      "But I won't follow you into the rabbit hole. I said I would.",
      "It's a terrible love that I'm walking in.",
      "Stand up straight at the foot of your love, I'll lift my shirt up.",
      "I was carried to Ohio in a swarm of bees.",
      "I never married, but Ohio don't remember me.",
      "Lay my head on the hood of your car. I take it too far.",
      "I'm on a bloodbuzz. God I am."
    ]};

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
