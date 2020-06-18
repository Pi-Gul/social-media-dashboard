let switchBack = document.getElementById('switch-back');
let html = document.querySelector('html');
let cardsArray = document.querySelectorAll('.card');
let stripe = document.querySelector('.stripe');
let totalFollowers = document.querySelector('.total-followers');


function changeTheme(event) {
  if (switchBack.style.justifyContent==='flex-start') {
    switchBack.style.justifyContent = 'flex-end';         //light theme
    switchBack.style.backgroundImage = 'none';
    switchBack.style.backgroundColor = 'hsl(230, 22%, 74%)';
    html.style.setProperty('--main-background', 'hsl(0, 0%, 100%)');
    html.style.setProperty('--stripe-background', 'hsl(225, 100%, 98%)');
    html.style.setProperty('--card-background', 'hsl(227, 47%, 96%)');
    html.style.setProperty('--card-background-highlight', 'hsl(227, 47%, 91%)');
    html.style.setProperty('--text-two', 'hsl(230, 17%, 14%)');
    html.style.setProperty('--text-one', 'hsl(228, 12%, 44%)');    
  } else {
    switchBack.style.justifyContent = 'flex-start';       //dark theme
    switchBack.style.backgroundImage = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
    html.style.setProperty('--main-background', 'hsl(230, 17%, 14%)');
    html.style.setProperty('--stripe-background', 'hsl(232, 19%, 15%)');
    html.style.setProperty('--card-background', 'hsl(228, 28%, 20%)');
    html.style.setProperty('--card-background-highlight', 'hsl(228, 28%, 26%)');
    html.style.setProperty('--text-one', 'hsl(228, 34%, 66%)');
    html.style.setProperty('--text-two', 'hsl(0, 0%, 100%)');
  };
  //html.style.backgroundColor = 'red';
  //document.querySelector('html').style.backgroundColor = 'red' 
};
function highlightOn(event) {
  event.target.style.backgroundColor = 'var(--card-background-highlight)';
};
function highlightOff(event) {
  event.target.style.backgroundColor = 'var(--card-background)';
};

switchBack.addEventListener('click', changeTheme);
switchBack.addEventListener('mouseover', (event) => {
  switchBack.style.backgroundImage='linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
  });
switchBack.addEventListener('mouseout', (event) => {
  switchBack.style.backgroundImage='none';
  });

for (let i = 0; i < cardsArray.length; i++) {
  cardsArray[i].addEventListener('mouseenter', highlightOn);
  cardsArray[i].addEventListener('mouseleave', highlightOff);
};