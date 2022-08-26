import { newGame, getData } from './modules/Data.js';
import './style.css';

const name = document.getElementById('name');
const scores = document.getElementById('score');
const btn = document.getElementById('btn');
const refresh = document.getElementById('refresh');
const list = document.getElementById('list-score');

refresh.addEventListener('click', () => document.location.reload());

btn.addEventListener('click', (e) => {
  e.preventDefault();
  newGame(name.value, scores.value);
  name.value = '';
  scores.value = '';
});

const results = getData();

results.then((res) => {
  const array = res.result;
  array.map((arr) => {
    const li = document.createElement('li');
    const id = array.indexOf(arr);

    if (id % 2 === 0) {
      li.classList.add('pair-list');
    } else {
      li.classList.add('impair-list');
    }

    li.innerHTML = `${arr.user} : ${arr.score}`;

    return list.append(li);
  });
});