const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score'); 

//first we want the score to be 0 
let result = 0; 
let currentTime = timeLeft.textContent; 

//we want the mole to be a random square on the grid 
 function  randomSquare() {
     square.forEach(box => {  // box is essentially referring to each square while square acts like an array of all the boxes 
         box.classList.remove('mole'); 
     }); 
     //random position is essentially the box with the mole classes added to it
     let randomPosition = square[Math.floor(Math.random()* 9)] // math.floor makes sure the num is an int and the * 9 makes it under or equal to 9 
     randomPosition.classList.add('mole');
     //assign the id of the randomPosition to the hit position for us to use later 
     hitPosition = randomPosition.id;
 }

 square.forEach(box => {
     box.addEventListener('mouseup',() => {
         if(box.id === hitPosition) {
            result = result +1;
            score.textContent = result;
         }
     })
 });

 function moveMole( ){
     let timerId = null; 
     timerId = setInterval(randomSquare,500)
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


