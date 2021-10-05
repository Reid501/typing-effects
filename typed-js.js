import Typed from './typed.js-master/src/typed.js';

const runTyping = () => {


    var typed = new Typed('#typed', {
        strings: [ 'remove the jargon and'],
        typeSpeed: 40,
        backSpeed: 40,
        loop: false
      });
        
}

runTyping();
setTimeout(function(){ 
  const background = document.querySelector('.animation-background');
  const text = document.querySelector('.animation-text');
  const cursor = document.querySelector('.typed-cursor');

  cursor.remove();
  background.style.backgroundPosition = '100%';
  text.style.backgroundPosition = '100%';

  setTimeout(function(){ 
    background.classList.remove('animation-background');
    text.classList.remove('animation-text')

    text.classList.add('line-through-highlight')

    setTimeout(function(){ 

      text.classList.remove('line-through-highlight')
  
      text.classList.add('line-through')
    }, 1300);

  }, 1300);

}, 2300);




const runTypingTwo = () => {
  setTimeout(function(){ 
    var typed = new Typed('#typedTwo', {
        strings: [ 'This is a test', 'This is a example', 'This is a example to show how we can create a typing effect.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true
      });
    }, 6000);
  }



runTypingTwo();