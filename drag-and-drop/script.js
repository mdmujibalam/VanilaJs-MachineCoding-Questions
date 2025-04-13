const itemHolder = document.getElementById('main-div');

// List of items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Create list of draggable items
items.forEach((itemText, index) => {
  const item = document.createElement('div');
  item.classList.add('draggable-item');
  item.setAttribute('draggable', 'true');
  item.setAttribute('data-index', index);
  item.textContent = itemText;

  // Add drag-and-drop event listeners
  item.addEventListener('dragstart', dragStartHandler);
  item.addEventListener('dragover', dragOverHandler);
  item.addEventListener('drop', dropHandler);
  item.addEventListener('dragend', dragEndHandler);

  itemHolder.appendChild(item);
});

// Variables for drag-and-drop
let draggedItemIndex = null;

// Drag start event
function dragStartHandler(event) {
  event.target.classList.add('dragging'); // Temporary class for visual cue
  draggedItemIndex = event.target.getAttribute('data-index'); // Store the index
}

// Drag over event
function dragOverHandler(event) {
  event.preventDefault(); // Allow drop
}

// Drop event
function dropHandler(event) {
  event.preventDefault();
  const targetIndex = event.target.getAttribute('data-index'); // Get the drop target index
  const draggedItem = document.querySelector(`[data-index='${draggedItemIndex}']`);
  const targetItem = document.querySelector(`[data-index='${targetIndex}']`);

  // Swap items in the DOM
  if (targetItem) {
    const draggedItemParent = draggedItem.parentNode;
    draggedItemParent.insertBefore(draggedItem, targetItem.nextSibling || targetItem);
  }
}

// Drag end event
function dragEndHandler(event) {
  event.target.classList.remove('dragging'); // Remove visual cue
}