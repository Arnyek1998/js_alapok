(function() {
  'use strict';
  
  // ----------------------------------------------------------------------------------
  // ---------------------------------- Objektumok ------------------------------------  
  // ----------------------------------------------------------------------------------
  
  // EcmaScript
  // https://en.wikipedia.org/wiki/ECMAScript
  
  // EcmaScript 2016 = ES7
  
  // például a let kulcsszó ES6-ban jelent meg
  
  // intelisense > kód kiegészítés 
  //(amikor felajánlja a dolgokat az editor)
  
  // syntax checker, vagy linter > a kódban levő hibákra
  // hívja fel a figyelmedet
  
  // ez egy üres object, így jelöljük
  let myObject = {};
  console.log('a myObject típusa: '+typeof(myObject));
  let myPlayer = {
    'name': 'Jhon',       // kulcs: érték párok sorozata
    'health': 100,        // "key": value
    'alive': true
  };
  
  console.log('a játékos neve: '+myPlayer.name);
  // véletlen számot generálunk 200 és 1 között
  let shoot = Math.floor((Math.random() * 200 ) + 1);
  
  if (myPlayer.alive) {
    myPlayer.health = myPlayer.health - shoot;
    console.log(shoot+'-al meglőttük a játékost');
    
    if(myPlayer.health <= 0) {
      myPlayer.alive = false;
    }
  }
  
  // a ! jel tagadást jelent
  if(!myPlayer.alive) {
    console.log(myPlayer.name+' is dead!!!');
  } else {
    console.log(myPlayer.name+' is alive!! Hurray!!');
    console.log(myPlayer.name+' has '+myPlayer.health+' health left');
  }
  
  myPlayer.level = 1; // Ezzel kibővítjük a myPlayer-t még egy property-vel
  
  // kibővítjük a myPlayer object-ez, de most egy fugvényt kap nem egy változót.
  myPlayer.levelup = function() {
    myPlayer.level++;
    myPlayer.health = myPlayer.health + ( myPlayer.level*100 );
  };
  
  // meghívjuk a myPlayer object levelup property-jét ami egy fügvény, ezért kell a zárójel
  myPlayer.levelup();
  console.log(myPlayer.name+' has '+myPlayer.health+' health, at level: '+myPlayer.level);
  
  // how to loop trough object
  for (let key in myPlayer) {
    console.log('checking...'+key+'...');
    console.log(key+' értéke: '+myPlayer[key]);
  }
  
  // objecteket tartalmazó tömb
  let animals = [
    { name: 'Cirmi', class: 'cat' },
    { name: 'Bodri', class: 'dog' },
    { name: 'Jago', class: 'bird' },
    { name: 'Pali', class: 'bird' },
    { name: 'Buffy', class: 'dog' }
  ];
  console.log(animals);
  
  // kigyűjtjük egy tömbbe a kutyákat, ehhez kell egy üres tömb, ami
  // kezdetben még üres
  let dogs = [];
  // how to loop trough array:
  // itt 'of' kulcsszót használunk, objectnél 'in'-t
  // requireres ES6+
  
  for ( let animal of animals ) {
    if( animal.class === 'dog' ) {
      dogs.push(animal);
    }
  } //end of for
  
  console.log(dogs);
  
  class dog {
    constructor(name) {
      this.name = name;
      this.legscount = 4;
    }
    bark() {
      console.log(this.name+': vau vau!');
    }
  }
  
  let dog1 = new dog('Bodri');
  console.log('a kutya neve: '+dog1.name);
  dog1.bark();
  
  class MutantDog extends dog {
    // mivel ez egy alosztály ezért kell a super() fgv....
    // nem tudjuk használni az alosztályban amíg nem hívjuk meg a super()-t
    constructor(name) {
      super(name);
      this.legscount = 3;
    }
  }
  
  let dog2 = new MutantDog('ASASD');
  console.log('a kutya neve: '+dog2.name);
  
  
})();