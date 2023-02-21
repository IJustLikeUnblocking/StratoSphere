const ul = document.querySelector('ul');
let isDragging = false;
let startX, startY, initialX, initialY, xOffset = 0, yOffset = 0;
const threshold = 50; // Adjust this value to set the threshold distance from the edge of the screen

ul.addEventListener('mousedown', function(e) {
  isDragging = true;
  
  // Set the z-index of the ul element to a high value when it is being dragged
  ul.style.zIndex = '999';
  
  // Get the initial mouse position and the initial position of the ul element
  initialX = ul.offsetLeft;
  initialY = ul.offsetTop;
  startX = e.clientX - xOffset;
  startY = e.clientY - yOffset;
});

ul.addEventListener('mouseup', function(e) {
  isDragging = false;
  xOffset = 0;
  yOffset = 0;
  
  // Reset the z-index of the ul element to its original value when the dragging is finished
  ul.style.zIndex = '1';
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    // Calculate the new position of the ul element based on the mouse movement
    xOffset = e.clientX - startX;
    yOffset = e.clientY - startY;

    // Check if the new position is within the bounds of the document's viewport
    const maxX = document.documentElement.clientWidth - ul.offsetWidth;
    const maxY = document.documentElement.clientHeight - ul.offsetHeight;
    let newX = Math.min(Math.max(initialX + xOffset, 0), maxX);
    let newY = Math.min(Math.max(initialY + yOffset, 0), maxY);
    
    // Check if the new position is within the threshold distance from the edge of the screen
    if (newX <= threshold) {
      newX = 0;
    } else if (newX >= maxX - threshold) {
      newX = maxX;
    }
    if (newY <= threshold) {
      newY = 0;
    } else if (newY >= maxY - threshold) {
      newY = maxY;
    }

    ul.style.left = newX + 'px';
    ul.style.top = newY + 'px';
  } else {
    xOffset = 0;
    yOffset = 0;
  }
});
