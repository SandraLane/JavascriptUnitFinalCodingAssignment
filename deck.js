

var suits = ['spades', 'hearts', 'clubs', 'diamonds' ];
var rank = [1,2,3,4,5,6,7,8,9,10,11,12,13];

class Deck {
    constructor() {
        this.deck = [];   
        this.suits = ['spades', 'hearts', 'clubs', 'diamonds' ];
        this.rank = [1,2,3,4,5,6,7,8,9,10,11,12,13];
   
    
    for(let cardRank in rank){
        for(let cardSuit in suits){
            this.deck.push(new Card(rank[cardRank], suits[cardSuit]))
        }
        }
    }
     

shuffle() {
    for(let i = this.deck.length-1; i>0; i--) {
        let k = Math.floor(Math.random() * i);
        let temp = this.deck[i];
        this.deck[i] = this.deck[k];
        this.deck[k] = temp;
    }
    console.log('Deck Shuffled');
}
}

class Player {
    constructor(name) {
        this.score =0;
        this.name = name;
        this.hand =[];
    }
}
class Card {
    constructor(rank,suits,name) {
        this.rank = rank;
        this.suits = suits;
        this.name = name;
    }
}

   class Game {
    constructor() {
        this.player1 = new Player('player1');
        this.player2 = new Player('player2');
        this.deck = new Deck();
        this.deck.shuffle();
    }



   distributeCards() {
    for (let i = 0; i < 26; i++) {
      this.player1.hand.push(this.deck.deck.pop());
    }
    for (let i = 0; i < 26; i++) {
      this.player2.hand.push(this.deck.deck.pop());
    }
} 


  
  playWar(){
    for (let i = 0; i <this.player1.hand.length; i++){
     
      if(this.player1.hand[i].rank > this.player2.hand[i].rank){
        console.log(`Player1 card ${this.player1.hand[i].suits} ${this.player1.hand[i].rank} beats Player2 card ${this.player2.hand[i].suits} ${this.player2.hand[i].rank}`)
        this.player1.score += 1;
      }
      else if(this.player2.hand[i].rank > this.player1.hand[i].rank){
       console.log(`Player2 card ${this.player2.hand[i].suits} ${this.player2.hand[i].rank} beats Player1 card ${this.player1.hand[i].suits} ${this.player1.hand[i].rank}`)
        this.player2.score += 1;
      } else{
      console.log(`Player2 card ${this.player2.hand[i].suits} ${this.player2.hand[i].rank} is equal to Player1 card ${this.player1.hand[i].suits} ${this.player1.hand[i].rank} so it's a tie!`);
    }
  }
}

  
    gameOver(){
    if(this.player1.score > this.player2.score){
      console.log(`Game Over - Player1 wins with score of ${this.player1.score}`)
    }
    else if(this.player1.score < this.player2.score){
      console.log(`Game Over - Player2 wins with score of ${this.player2.score}`)
    }
    else{
      console.log("Game Over - It's a tie!");
    } 
  }
}
 

var start = new Game();
start.distributeCards();
start.playWar();
start.gameOver();

