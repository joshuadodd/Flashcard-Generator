function ClozeCard(fullText, cloze, err) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, "...");
    if (!fullText.includes(cloze)) {
        console.log("ERROR: This doesn't work -- oops!" );
    }
};



module.exports = ClozeCard;