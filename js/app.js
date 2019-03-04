// Get modal element
var modal = document.getElementById('modal');

// Get modal button
var modalBtn = document.getElementById('facts');

// Get close button
var closeBtn = document.getElementById('closeBtn');

// listen for click on open button
modalBtn.addEventListener('click', openModal);

// listen for click on close button
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
  modal.style.display = 'block';
}

// function to close modal
function closeModal() {
  modal.style.display = 'none';
}
