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
  list.innerHTML = ' ';
  const array = res.result;
  array.map((arr) => {
    const index = array.indexOf(arr);
    list.innerHTML += `
    <li class = "${index % 2 ? 'pair-list' : 'impair-list'}"> ${arr.user} : ${arr.score}</li>
    `;
    return arr;
  });
});