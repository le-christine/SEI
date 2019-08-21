document.addEventListener("DOMContentLoaded", function(event) {
  const container = document.querySelector('.container');
  let noteCount = 1;

  document.querySelector('.box-creator-button').addEventListener('click', function() {
    const stickyNote = document.createElement("div");
    container.appendChild(stickyNote);
    stickyNote.classList.add('box');

    const stickMessage = document.querySelector('.box-color-note').value;
    const stickyColor = document.querySelector('.box-color-input').value;

    document.querySelector('.box-color-note').value = '';
    document.querySelector('.box-color-input').value = '';

    stickyNote.style.backgroundColor = stickyColor;
    stickyNote.innerHTML = `${noteCount++}. ${stickMessage}`;
  })
});
