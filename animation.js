// Get the ball element
var ball = document.getElementById('ball');

// Set the initial position and velocity of the ball
var x = 50; // horizontal position
var y = 50; // vertical position
var vx = 5; // horizontal velocity
var vy = 2; // vertical velocity

// Set up the animation loop
function animate() {
  // Update the position of the ball
  x += vx;
  y += vy;

  // Reverse the direction if the ball hits the boundaries
  if (x + ball.offsetWidth >= window.innerWidth || x <= 0) {
    vx = -vx;
    changeBallColor();
  }
  if (y + ball.offsetHeight >= window.innerHeight || y <= 0) {
    vy = -vy;
    changeBallColor();
  }

  // Update the position of the ball element
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  // Call the animate function again in the next frame
  requestAnimationFrame(animate);
}

// Function to change the color of the ball randomly
function changeBallColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  ball.style.backgroundColor = randomColor;
}

// Start the animation
animate();
