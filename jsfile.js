const container = document.getElementById('container');

const gridSize = 16;
const totalSquares = gridSize * gridSize;
let r = 0;
let g = 0;
let b = 0;
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  };  

for (let i = 0; i < totalSquares; i++) {
    
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        let re = getRandomNum(0, 255);
        let gr = getRandomNum(0, 255);
        let bl = getRandomNum(0, 255);
        square.style.backgroundColor = `rgb(${r+re}, ${g+gr}, ${b+bl})`;
    });

    container.appendChild(square);
  
}
// Add a button to reset the grid
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white'; // or any default color you want
  });
});