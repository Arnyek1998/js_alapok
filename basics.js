
console.log("hello");

(function () {
    'use strict' 
    // Minden amit ide írok, az strict módban fog futni.
    // A strict mód szigorúbb szabályokkal futtatja
    // a javascript kódot, és több hibát fog kiírni a böngésző
    // amit enélkül nem tenne meg.
    
    // Ez egy újradeklarálható változó lesz:
    var szoveg2 = "valami";
    console.log(szoveg2);
    // Erre nem kapunk hibát mert a var kulcsszóval deklarált változót
    // újradeklarálhatjuk:
    var szoveg2 = "valami";
    
    let szoveg3 = "szoveg3 ezt a let-el hoztuk letre";
    console.log(szoveg3);
    // A let kulcsszóval létrehozott változókat nem lehet újradeklarálni.
    // Ha a következő sort nem kommentezzük ki, hibát kapunk.
    // let szoveg3 = "szoveg3 ezt a let-el hoztuk letre";
    
    //Ez egy értékadás, nem deklarálás:
    szoveg3 = "új értéket kap a szoveg3";
    
    // A console.log egy fügvény, aminek átadjuk a szoveg3 változót
    // A console.log egy más ember által írt kód, ami azt csinálja
    // A neki adott változóval, hogy kiírja a console-ra.
    console.log(szoveg3);
    
    // Kiírathatunk egyszerre szöveget és változót is:
    let szam1 = 94;
    console.log("a szam1 változó éréke: "+szam1);
    
}()); // Itt van vége a strict módnak, ez után már nem for strict
      // módban futni a kód.


// implicit global változó lesz a szöveg.
// global: A szöveg változó mindenhol elérhető lesz a kódban.
// implicit global változót lehetőleg ne használjunk!
szoveg = "3";

console.log(szoveg);