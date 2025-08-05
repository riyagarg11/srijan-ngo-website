//this code creates a visual indicator of the user's scrolling progress on the webpage 
//by dynamically adjusting the width of an element based on their scroll position.

const filled = document.querySelector('.filled');

function update() {
  filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  requestAnimationFrame(update);
}

update();

