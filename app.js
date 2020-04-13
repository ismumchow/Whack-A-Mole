const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score'); 

//first we want the score to be 0 
let result = 0; 
let currentTime = timeLeft.textContent; 

//we want the mole to be a random square on the grid 
 function  randomSquare() {
     square.forEach(className => {
         className.classList.remove('mole'); 
     }); 
     let randomPosition = square[Math.floor(Math.random()* 9)] // math.floor makes sure the num is an int and the * 9 makes it under or equal to 9 
     randomPosition.classList.add('mole');
     //assign the id of the randomPosition to the hit position for us to use later 
     hitPosition = randomPosition.id;
 }

 square.forEach(id => {
     id.addEventListener('mouseup',() => {
         if(id.id === hitPosition) {
            result = result +1;
            score.textContent = result;
         }
     })
 });

 function moveMole( ){
     let timerId = null; 
     timerId = setInterval(randomSquare,1000)
 }

 moveMole();

 function countDown() {
     currentTime--;
     timeLeft.textContent = currentTime;

     if (currentTime === 0) {
         clearInterval(timerId);
         alert('GAME OVER')
     }
 }

 let timerId = setInterval(countDown,1000);


