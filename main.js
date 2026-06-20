
let persona = {

    nome : 'Mario',
    cognome : 'Manfredi',
    età : 25,
    presentazione : function(){
        console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.età} anni`);
        
    }
}

persona.presentazione();