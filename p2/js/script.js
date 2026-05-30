// let mousePosition = {
//   x: 0,
//   y: 0
// };

// document.addEventListener("mousemove", (mouse) => {
//   mousePosition = {
//     x: mouse.clientX,
//     y: mouse.clientY
//   };
// });

// const loop = () => {
//   const gradientElement = document.getElementById("hero-gradient");

//   gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

//   // Request the next animation frame
//   window.requestAnimationFrame(loop);
// };

// // Start the animation loop
// window.requestAnimationFrame(loop);

// 1. Select the element you want to track the mouse
const cursor = document.querySelector('#hero-gradient');

// 2. Set up initial position variables
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// 3. Easing factor (0.1 means it covers 10% of the distance each frame)
const ease = 0.06;

// 4. Update coordinates on mouse move
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 5. Animation loop using requestAnimationFrame
function animate() {
  // Linear interpolation formula: current + (target - current) * ease
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;

  // Apply the smoothed coordinates
  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

  // Call this function on every screen refresh
  requestAnimationFrame(animate);
}

// Start the loop
animate();