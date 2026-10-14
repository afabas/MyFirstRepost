/*
let waardeInt = 10;
let waardeInt2 = 20;
let waardeString = "Abcd";

if (waardeInt === 10){
    console.log("dit is 10");
    
}
else if (waardeInt2){
    console.log("Dit is 20.");
}
else {
    console.log("dit is niet 10/20.")
}

let lijst = [10, 20, 30, 40];
console.log(lijst);
lijst.push(null); //toevoegen
console.log(lijst);

let lijst2 = [90, 80, 70, 60];
console.log(lijst.concat(lijst2)); //concat wil zeggen samenvoegen

for (let i = 0; i < lijst.length; i++){
    console.log(lijst[i]);
}

lijst.forEach((element)=>{
    console.log(element);
});

let counter = 0;
while( counter < 4){
    counter++;
    console.log(counter);
}

switch (counter) {
    case 4: console.log("Dit is vier.";)
        
        break;
    case 3: console.log("Dit is drie.";)
       
        break; 
    case 2: console.log("Dit is twee.";)
        
        break; 
    case 1: console.log("Dit is een.";)
        
        break;

    default:
        console.log("Fout waarde");
        break;
}

console.log(lijst.join(" en ")); //join wordt gebruikt om ietsz toe te voegen
console.log(lijst.slice(1, 3)); //slice wordt gebruikt o
reverse.

*/

let zin = "hallo iedereen, hoe gaat het? ik ben blij dat ik jullie zie.";
let woorden = zin.split(/[\s,.!?;:()[\]{}"]+/);

let telling = {};

for(let woord of woorden){
    if (woord !== ""){
        if(telling[woord]){
            telling[woord]++;
        } else {telling [woord] = 1}
    }
}

for (let woord in telling) {
    console.log(woord + " : " + telling[woord]);
}
