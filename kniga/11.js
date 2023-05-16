const menu = document.getElementById('menu');
const textArea = document.getElementById('text');
const addBtn = document.getElementById('add-btn');
const updateBtn = document.getElementById('update-btn');
let notes = [];

addBtn.addEventListener('click', function() {
  const note = textArea.value;
  const noteNumber = notes.length + 1;
  const linkText = document.createTextNode(`Запись ${noteNumber}`);
  const link = document.createElement('a');
  link.appendChild(linkText);
  link.href = '#';
  menu.appendChild(link);
  notes.push(note);
  textArea.value = '';
});

menu.addEventListener('click', function(event) {
  event.preventDefault();
  const link = event.target;
  const index = Array.from(menu.children).indexOf(link);
  textArea.value = notes[index];
});

updateBtn.addEventListener('click', function() {
  const link = menu.querySelector(':hover');
  if (link) {
    const index = Array.from(menu.children).indexOf(link);
    notes[index] = textArea.value;
    textArea.value = '';
  }
});