//1//
const hobbies = ['jogar vôlei','cozinhar','dormir'];
console.log(hobbies)
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
//desafio 1//
hobbies.push('escutar música');
console.log(hobbies)

hobbies.forEach(function(hobby) {
console.log("Oi, eu sou o hobby " + hobby + "!");
});

//2//
const bookTitles = hobbies.map(function(hobby) {
return "O incrível mundo de " + hobby;
});
console.log(bookTitles);
//desafio 2//
const catálogo = ['transformando suor em ouro','O Que Tem na Geladeira?','Eu não quero dormir agora']
const catálogos = catálogo.map(function(catá) {
return "o meu catálogo tem " + catá;
});
console.log(catálogos);

//3//
const dHobbies = hobbies.filter(function(hobby) {
return hobby[0] === 'd';
});
console.log(dHobbies);
//desafio 3//
const filtrarHobbies = hobbies.filter(function(hobby) {
return hobby[0] === 'c';
});
console.log(dHobbies + ' ' + filtrarHobbies);

//4//
const runningPosition = hobbies.findIndex(function(hobby) {
return hobby === 'jogar vôlei';
});
console.log("jogar vôlei está na posição: " + runningPosition);
//desafio 4//
const runningPosi = hobbies.findIndex(function(hobby) {
return hobby === 'escutar música';
});
console.log("escutar música está na posição:" +  runningPosi);

//5-A//
const allHobbies = hobbies.reduce(function(accumulator, hobby) {
return accumulator + " e " + hobby; }, "");
console.log("Meus hobbies são: " + allHobbies);
//desafio 5-A//
const Hobbies = hobbies.reduce(function(accumulator, hobby) {
return accumulator + " e " + hobby; }, "");
console.log("Gosto muito de: " + Hobbies);

//5-B//
const hasVHobby = hobbies.some(function(hobby) {
return hobby[0] === 'v'; });
console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);
//desafio 5-B//
const maiorqueoito = hobbies.some(function(hobby) {
return hobby.length > 8;
})
console.log("Eu tenho um hobby maior que 8 letras? " + maiorqueoito)

//6//
const allShort = hobbies.every(function(hobby) { 
return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);
//desafio 6//
const minúsculo = hobbies.every(function(hobby) {
return hobby === hobby.toLowerCase()
})
console.log('Todos os meus hobbies começam com letra minúscula: ' + minúsculo);

//7//
hobbies.push('comer');
console.log(hobbies)

const fiveLetterHobby = hobbies.find(function(hobby) {
return hobby.length === 5; });
console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);
//desafio 7//
const letraz = hobbies.find(function(hobby) {
return hobby.includes ('z'); });
console.log("Meu primeiro hobby que tem a letra z é: " + letraz);


//8//
const firstThreeHobbies = hobbies.slice(0, 3); 
console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);
//desafio 8//
const segaoquaHobbies = hobbies.slice(2, 4); 
console.log("Meus três primeiros hobbies são: ", segaoquaHobbies);