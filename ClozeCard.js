//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards
//The constructor should accept two arguments: `text` and `cloze`.
//The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
//The constructed object should have a `partial` property that contains _only_ the partial text.
//The constructed object should have a `fullText` property that contains _only_ the full text.
//The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
//Use prototypes to attach these methods, wherever possible.
//The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.
function ClozeCard(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, "...");

};
//var clozeCard = new ClozeCard (“George Washington was the first POTUS.“, “George Washington”)
//console.log(clozeCard.fullText);
//console.log(clozeCard.cloze);
//console.log(clozeCard.partial);
//
 

var newCloze = new ClozeFlashcard('My favorite color is blue.', 'blue');
newCloze.create();

module.exports = ClozeCard;