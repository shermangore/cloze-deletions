/**
 * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
 * The constructor should accept two arguments: front and back.
 * The constructed object should have a front property that contains the text on the front of the card.
 * The constructed object should have a back property that contains the text on the back of the card.
 */

function BasicCard (front, back) {
    // Eliminate the need for the "new" declaration when creating a new instance of a BasicCard object
    // If this is already a BasicCard object, then just set the values
    if (this instanceof BasicCard) {
        // Assign the values
        this.front = front;
        this.back = back;
    } else {
         // If this isn't already a BasicCard object, then create a new BasicCard
       return new BasicCard(front, back);
    }
}

module.exports = BasicCard;