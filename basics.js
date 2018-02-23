// implicit global változó lesz a szoveg
// global: a szoveg valtozo mindenhol elérhető lesz a kódban
// implicit golbal valtozot lehetoleg ne hasznaljunk!
szoveg = '3';
console.log(szoveg);

// Szekvencia: A program az utasításokat soronként hajtja végre egymás után.


// Innentől minden strict mode-ban van.
(function () {
  'use strict';
  // minden amit ide irok az strict mode-ban fog futni
  // a strict mode szigorubb szabalyokkal futtatja 
  // a javascript kodot, és több hibát fog kiírni a böngésző
  // amit enélkül nem tenne meg

  // ez egy ujradeklarálható változó lesz:
  var szoveg2 = 'valami';
  console.log(szoveg2);

  // erre nem kapunk hibát mert a var kulcsszóval deklarált változót
  // ujradeklarálhatjuk:
  var szoveg2 = 'valami';

  let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';
  console.log(szoveg3);
  // a let kulcsszoval letrehozott valtozokat nem lehet ujradeklaralni, 
  // a kovetkezo sort ha nem kommentezzuk, hibat kapunk:
  // let szoveg3 = 'szoveg3 ezt let-el hoztuk letre';

  // automatic semicolon insertion,
  // ha kihagyjuk a pontosvesszőt, akkor a javascript
  // megpróbálja betenni helyettünk, (ez néha sikerül, néha nem...)
  // ez egy értékadás, nem deklarálás: 
  szoveg3 = 'uj erteket kap a szoveg3';

  
  // a console.log egy fugveny, aminek átadjuk a szoveg3 valtozot
  // a console.log egy más ember által írt kód, ami azt csinálja 
  // a neki adott változóval, hogy kiírja a console-ra
  console.log(szoveg3);

  // kiirathatunk egyszerre szoveget és változót is:
  let szam1 = 94;
  console.log('a szam1 valtozo értéke: '+szam1);
  
  
  // a szöveg típus string;
  console.log('szoveg3 típusa: '+typeof(szoveg3));
  // a szam1 típusát is kiíratjuk.
  console.log('szam1 változó típusa: '+typeof(szam1));
  
  szam1 = 34;
  
  let a = 3;
  let b = 9;
  console.log('a értéke: '+a+' b értéke: '+b);
  // Kicseréljük két változó értékét, egy harmadik segédváltozó segítségével.
  let c = a;
  a = b;
  b = c;
  console.log('a értéke: '+a+' b értéke: '+b);
  
  // Boolean változó típus.
  // Logikai változó, kér értéke lehet, true vagy false
  let kapcsolo = true;
  
  // Elágazás, ha a feltételben lévő rész igaz, akkor a {}-ban lévő rész
  // lefut.
  if(kapcsolo === true)
  {
    console.log('A kapcsoló be van kapcsolva');
  } else {
    // különben
    console.log('A kapcsoló ki van kapcsolva');
  }
  
  let nev = 'Géza';
  // Három darab egyenlőségjellel hasonlítunk össze értékeket.
  // A 3db egyenlőségjel a típust is hasonlítja.
  // A 2db egyenlőség jel nem hasonlít típust: pl
  // 3 == '3' > true
  // 3 === '3' > false
  if ( nev === 'Géza' )
  {
    console.log('Géza itt van');
  }
  
  if( a > b )
  {
    console.log('a nagyobb mint b');
  } else {
    console.log('a nem nagyobb mint b');
  }
  
  //Ha nem egyenlőséget vizsgálunk, akkor azt így kell:
  // Itt is ha 2db egyenlőségjel van akkor vizsgáljuk a típust is.
  // Ha csak egy lenne, akkor nem vizsgálnánk a típust...
  //if ( a !== ) ...
  
  //hoisting
  console.log('a palack értéke: '+palack); // Ebben a sorban már létezik a
  // palack változó, csak még nem kapott értéket, ezért "undefined".
  // Csak a "var" kulcsszóval deklarált változókra érvényes a "hoisting"
  // "Let" kulcsszó esetén errort kapunk.
  var palack = 'szilva';
  
  let szam = 0;
  // Ez olyan mint ha azt írnám, hogy szam = szam + 1
  szam++;
  szam+=4;
  console.log('szám értéke: '+szam);
  
  console.log('Új sort a \n karakterrel lehet csinálni');
  
  // ----------------------------------------------------------------------------------
  // -------------------------------- Ciklusok ----------------------------------------
  // ----------------------------------------------------------------------------------
  
  // A {}-ban lévő rész addig fut, amíg a while-ban lévő feltétel igaz.
  while ( szam >= 0) {
    szam--;
    console.log('szam-ból levontunk egyet: '+szam);
  }
  
  // Végtelen cilus, soha nem ér véget.
  //while ( szam >= 0) {
  //szam--;
  //console.log('szam-ból levontunk egyet: '+szam);
  //}
  
  // ----------------------------------------------------------------------------------
  // --------------------------------- Tömbök ------------------------------------------
  // ----------------------------------------------------------------------------------
  
  // Ezt a változó típust tömbnek hívjuk.
  // Több elemet tartalmazhat a tömb.
  let szamok = [3,4,5,6,4,6,9];
  // A javascriptben a tömb is object.
  console.log('a számok típusa: '+typeof(szamok));
  console.log('a tömb nulladik eleme: '+szamok[0]);
  
  // A tömb 7 elemű, de nincs 6edik eleme mert nullától indexeljük.
  // a tömböket.
  console.log('a tömb hetedik eleme: '+szamok[7]);
  
  // For ciklusban meg kell adni hogy mettől meddig menjünk.
  // És azt is hogy hányasával lépkedjünk, az i++ azt jelenti hogy egyesével megyünk.
  for (let i = 0; i < szamok.length; i++) {
    // A számok i-edik elemét kiírjuk:
    console.log('a szam: '+szamok[i]);
  }
  
  // Ellenőrizzük hogy van e 9-es a tömbben:
  for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] === 9 ) {
      console.log('van a számok között 9-es');
    }
  }
  
  let j = 0;
  while ( j < szamok.length ) {
    console.log('a szam: '+szamok[j]);
    j++;
  }
  
  // ----------------------------------------------------------------------------------
  // ---------------------------------- Függvények ------------------------------------  
  // ----------------------------------------------------------------------------------
  
  // 1. Function Statement
  // Erre érvényes a hoisting, ezt a kódban korábban is használhatjuk
  
  // Ez egy olyan kódrész, amit később újra fel tudunk használni
  // Az összeadás függvénynek két bemeneti paramétere van
  function osszeadas(szam1, szam2) {
    // a szam1 és szam2 number típusú kell hogy legyen mindkettő feltétel
    // igaz kell hogy legyen, ezért rakunk közé && (AND) jelet
    if ( (typeof(szam1) === 'number') && (typeof(szam2) === 'number') ) {
      let eredmeny = szam1 + szam2;
      console.log('az eredmény: '+eredmeny);
    } else {
      console.log('error, nem számot kaptam!');
    }
  }
  
  // Itt használjuk fel az összeadás függvényünket.
  osszeadas(6, 9);
  osszeadas('34', 9);
  
  // 2. Function Expression
  // Erre nem érvényes a hoisting
  
  let convertToNumber = function (szam) {
    let konvertaltSzam = parseInt(szam);
    if (isNaN(konvertaltSzam)) {
      konvertaltSzam = 0;
      console.log('NaN-t kaptunk ezért nullázzuk');
    } else {
      console.log('Konvertálás sikeres volt');
    }
  };
  
  convertToNumber('34');
  convertToNumber('asdasd');
  
  // camelCasing = aMásodikSzótólMindenBetűtNagybetűvelÍrok
  // javascriptben gyakran használjuk
  function pontosIdo() {
    // Lokális változó, csak ebben a fügvényben van értelme.
    // variable scope: local
    let ido = 5;
    console.log('a pontos idő: '+ido);
    // fügvényre is érvényes a scope, ezt csak a pontosIdo-n belül tudom használni
    // closure: Ha kettő fügvény van egymásban, akkor a belső fügvény
    // hozzáfér a külső fügvény változóihoz.
    function pontosIdo2() {
      console.log('az ido értéke: '+ido);
    }
    pontosIdo2();
  }
  
  // Itt használjuk a pontosIdo függvényt
  pontosIdo();
  
  // pontosIdo2();
  // az ido változónak itt nincs értelme, mert a pontosIdo fgv-en belül
  // deklaráltuk.
  // console.log('a pontos idő: '+ido);
  
  // IIFE: immidiately invoked function expression:
  
  (function() {
    console.log('ez egyből meghívódik');
  })();
  
  



}()); // itt van vege a strict mode-nak, ez utan mar nem fog 
// strict mode-ban futni a kod.