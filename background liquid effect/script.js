const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}

class blob {
  constructor(el) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    this.initialX = randomNumber(0, window.innerWidth - this.size);
    this.initialX = randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.top = `${this.initialX}px`;
    this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random) > 0.5? 1 : -1;
    this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random) > 0.5? 1 : -1;
    this.x = this.initialX;
    this.y = this.initialY;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vy *= -1;
    }
    if (this.y > window.innerWidth - this.size) {
      this.y = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }
  move(){
    this.el.style.transform = `translate(${this.x - this.initialX}px, &{this.y = this.initialY}px)`;
  }
}
function update(){
  const blobEls = document.querySelectorAll(".bouncing-blob");
  const blobs = Array.from(blobEls).map((blobEl) => new blob(blobEl));

  function update(){
    requestAnimationFrame(update);
    blobs.forEach(blob){
      blob.update();
      blob.move();
    }
    requestAnimationFrame(update);
  }
}
initBlobs();