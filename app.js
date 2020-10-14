window.addEventListener('load',init,);
//levels 
const levels={
    easy:5,
    medium:3,
    hard:2
}
let currentLevel=levels.medium;

//globallzz maan
let time=currentLevel;
let score=0;
let isPlaying;


//dom elem
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const ezBtn= document.querySelector('#ez')
const words = [
    'mistake',
    'work',
    'station',
    'backstage',
    'reckless',
    'blade',
    'starter',
    'monitoring',
    'simply',
    'widndows',
    'disintegration',
    'maker',
    'fleetwood',
    'mac',
    'fejzo',
    'rabbits',
    'voyage',
    'naming',
    'sting',
    'wariorz',
    'barcelona',
    'antetokounmpo',
    'menager',
    'buletproof',
    'fading',
    'time',
    'barking',
  ];

  //init
  function init(){
      //ui sec
      seconds.innerHTML=currentLevel;
     //word placement
     showWord(words);
     //start on word input
     wordInput.addEventListener('input', startMatch);
     setInterval(countdown,1000);
     //checkgame
     setInterval(checkStatus,50);
  }
  //levelzzz
  function setCurrentLevel(level) {
    currentLevel = level;
    seconds.innerHTML = currentLevel;
  }
  document.querySelector('#ez').addEventListener('click', function () {
    setCurrentLevel(levels.easy)
    
  }) 
  document.querySelector('#med').addEventListener('click', function() {
    setCurrentLevel(levels.medium) 
  })
  
  document.querySelector('#hard').addEventListener('click', function() {
    setCurrentLevel(levels.hard)
  })

  //random word
  function showWord(words){
      const randomWord = Math.floor(Math.random() * words.length);
      //output
      currentWord.innerHTML= words[randomWord];
  } 
//time
  function countdown(){
      if(time> 0){
time--;
      } else if( time===0){
          isPlaying=false;
      }
timeDisplay.innerHTML=time;
  }

  //game status
  function checkStatus(){
      if(!isPlaying && time===0){
          message.innerHTML= 'Game over, Try Again'
          score=-1;
      }
  }
  //start match
  function startMatch(){
      if(matchWords()){
          isPlaying=true;
          time= currentLevel+1;
          showWord(words);
          wordInput.value='';
          score++;
              }
              if(score=== -1){
                  scoreDisplay.innerHTML=0;

              }else{
              scoreDisplay.innerHTML=score;
              }
  }
  function matchWords(){
       if(wordInput.value=== currentWord.innerHTML){
              message.innerHTML='Nice';
              return true;
          } else {
              message.innerHTML="";
              return false;
          }

  }
