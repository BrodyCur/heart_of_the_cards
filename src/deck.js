class Deck {
  // We've defined the constructor method, although it's not currently doing anything.
  // This is the perfect place to set up the initial state of any new Deck instances.
  constructor() {
    this.cards = [];

    for (let i = 1; i < 53; i++) {
      this.cards.push(i);
    };
  };

  // Any additional instance methods required by the test suite can be defined below.
  
  shuffle() {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * this.cards.length));
      let location2 = Math.floor((Math.random() * this.cards.length));
      let tmp = this.cards[location1];

      this.cards[location1] = this.cards[location2];
      this.cards[location2] = tmp;
    };
    return this.cards
  };

  draw(num) {
    if (this.cards.length === 0) {
      return -1;
    } else if (num === undefined) {
      return this.cards.pop();
    } else if (typeof num !== 'number') {
      return undefined;
    } else {
      return this.cards.splice(-num);
    }
  }
};

module.exports = Deck;
