window.addEventListener('load',init);
//levels 
const levels={
    easy:5,
    medium:3,
    hard:2
}
const currentLevel=levels.medium;

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

const words = [
    'bar',
    'drink',
    'strike',
    'mention',
    'blade',
    'running',
    'smarter',
    'living',
    'sense',
    'plugwalk',
    'integration',
    'make',
    'feeling',
    'bread',
    'pistol',
    'mice',
    'rabbit',
    'nitrogen',
    'subliminal',
    'thinking',
    'master',
    'logic',
    'rolling',
    'bloated',
    'fear',
    'stunning',
    'brave',
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
