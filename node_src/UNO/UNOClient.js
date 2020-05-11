let Client = require('../Client.js');

/**
 * Client class specific to UNO game
 * @type {module.UNOClient}
 */
module.exports = class UNOClient extends Client{
    constructor(name){
        super(name);
        this.turn = false;
        this.hasWon = false;
        this.cards = [];
        this.score = [];
    }
    getScore(){
        return this.score;
    }
    calculateScore(){
        let score = 0;
        this.cards.forEach(card => {
            let c2 = card.charAt(1);
            if(c2 === 'g' || c2 === 'c'){
                score += 50;
            } else if(c2 === 'p' || c2 === 'n' || c2 === 'r'){
                score += 20;
            } else {
                score += parseInt(c2);
            }
        });
        if(this.cards.length == 0)score = "-";
        return score;
    }
    insertScore(score){
        this.score.push(score);
    }
    setHasWon(hasWon){
        this.hasWon = hasWon;
        return this;
    }
    getHasWon(){
        return this.hasWon;
    }    
    setTurn(turn){
        this.turn = turn;
        return this;
    }
    getTurn(){
        return this.turn;
    }
    addCard(card){
        this.cards.push(card);
    }
    takeCard(card){
        let index = this.cards.indexOf(card);
        if(index >= 0){
            this.cards.splice(index, 1);
            return true;
        }
        return false;
    }
    clearCards(){
        this.cards = [];
    }
    getCards(){
        return this.cards;
    }
    getCardsCount(){
        return this.cards.length;
    }
    static setArrayTurn(unoClients, turn){
        if(Array.isArray(unoClients)){
            unoClients.forEach(element => {
                if(element instanceof UNOClient){
                    element.setTurn(turn);
                }
            });
        }
    }
    static setArrayHasWon(unoClients, hasWon){
        if(Array.isArray(unoClients)){
            unoClients.forEach(element => {
                if(element instanceof UNOClient){
                    element.setHasWon(hasWon);
                }
            });
        }
    }
    static setArrayReady(unoClients, ready){
        if(Array.isArray(unoClients)){
            unoClients.forEach(element => {
                if(element instanceof UNOClient){
                    element.setReady(ready);
                }
            });
        }
    }   
    static calculateScores(unoClients){
        if(Array.isArray(unoClients)){
            unoClients.forEach(element => {
                if(element instanceof UNOClient){
                    element.insertScore(element.calculateScore());
                }
            });
        }
    }        
};