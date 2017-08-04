//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards
//The constructor should accept two arguments: `text` and `cloze`.
//The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
//The constructed object should have a `partial` property that contains _only_ the partial text.
//The constructed object should have a `fullText` property that contains _only_ the full text.
//The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
//Use prototypes to attach these methods, wherever possible.
//The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.
function ClozeCard(fullText, cloze, err) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, "...");
    if (!fullText.includes(cloze)) {
        console.log("ERROR: This doesn't work -- oops!" );
    }
};


//var ClozeCard = new ClozeCard('Who was the first president of the United States?', 'George Washington');
//ClozeCard.create();
//console.log(ClozeCard);
module.exports = ClozeCard;