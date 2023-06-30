const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPosition)

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
  
    mario.style.animation = 'none';
    mario.style.bottom = `${pipePosition}px`;
  
    mario.src = './iamgem/game.over.png';
    mario.style.width = '800px';
  
    mario.style.position = 'fixed';
    mario.style.left = '50%';
    mario.style.top = '15%';
    mario.style.transform = 'translate(-50%, -50%)';

    clearInterval(loop)

  }
  
  
}, 10);

document.addEventListener('keydown', jump);
