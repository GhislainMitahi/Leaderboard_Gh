import data from './modules/data.js';
import './style.css';

const list = document.getElementById('list-score');
data.forEach((scores) => {
  const li = document.createElement('li');
  const id = data.indexOf(scores);

  if (id % 2 === 0) {
    li.classList.add('pair-list');
  } else {
    li.classList.add('impair-list');
  }

  li.innerHTML = `Name : ${scores.name}`;

  list.append(li);
});