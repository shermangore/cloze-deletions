/**
 * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.
 */
function ClozeCard(text, cloze) {
    // Eliminate the need for the "new" declaration when creating a new instance of a ClozeCard object
    // If this is already a ClozeCard object, then just set the values
    if (this instanceof ClozeCard) {
        // Check to see if the cloze exists within the text
        if (text.indexOf(cloze) >= 0) {
            // If the cloze exists, assign the value
            this.partialText = text.replace(cloze, '...');
        } else {
            // If the cloze doesn't exists in the text, throw an error
            let err = new Error(`The cloze you chose (${cloze}), is not one this text knows.`);
            throw err;
        }

        // Assign the other values
        this.text = text;
        this.cloze = cloze;
    } else {
        // Create a new ClozeCard
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;