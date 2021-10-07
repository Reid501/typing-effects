import Typed from './typed.js-master/src/typed.js';

setTimeout(function(){ 
  const background = document.querySelector('.animation-background');
  const text = document.querySelector('.animation-text');

  background.style.backgroundPosition = '100%';
  text.style.backgroundPosition = '100%';

  setTimeout(function(){ 
    background.classList.remove('animation-background');
    text.classList.remove('animation-text')

    text.classList.add('line-through-highlight')

    setTimeout(function(){ 

      const container = document.querySelector('.animation-container');
      container.remove();

    }, 2000);

  }, 2000);

}, 2000);



const runTypingTwo = () => {
  
  setTimeout(function(){ 


    var typed = new Typed('#typedTwo', {
      
        strings: [ 'This is a test', 'This is a example '],
        showCursor: false,
        typeSpeed: 50,
        backSpeed: 60,

        smartBackspace: true
    });
    const cursor = document.querySelector('.my-cursor');
    cursor.style.display = "inline"
  }, 6500);
}

const runTypingThree = () => {

  setTimeout(function(){ 
    var typed = new Typed('#typedThree', {
        strings: [ 'to show how we can'],
        showCursor: false,
        typeSpeed: 70,
    });

    const spacing = document.querySelector('.spacing');
    spacing.classList.add('p-spacing')
  }, 10000);
}

const runTypingFour = () => {

  setTimeout(function(){ 
    var typed = new Typed('#typedFour', {
        strings: [ 'create a typing effect.'],
        showCursor: false,
        typeSpeed: 50,
    });

    const spacingTwo = document.querySelector('.spacing-two');
    spacingTwo.classList.add('p-spacing')
  }, 12300);
}



runTypingTwo();
runTypingThree();
runTypingFour();