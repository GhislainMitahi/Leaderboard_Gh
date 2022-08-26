const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const Id = 'Zl4d7IVkemOTTVg2fUdz';

const newGame = async (name, scores) => {
  await fetch(`${url}games/${Id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: scores.value,
    }),
    headers: {
      'content-type': 'Application/json; charset=UTF-8',
    },
  }).then((Response) => Response.json());
  name.value = '';
  scores.value = '';
};

const getData = async () => {
  const result$ = await fetch(`${url}games/${Id}/scores/`);
  const res = await result$.json();
  return res;
};

export { newGame, getData };