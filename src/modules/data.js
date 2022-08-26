const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'hVgIHhMGKjMiPzLiECktA';

const getData = async () => {
  const result$ = await fetch(`${url}games/${id}/scores/`);
  const res = await result$.json();

  return res;
};

const newGame = async (users, scores) => {
  const postData = await fetch(`${url}games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: users,
      score: scores,
    }),
    headers: {
      'content-type': 'Application/json; charset=UTF-8',
    },
  });
  const response = await postData.json();
  return response;
};

export { newGame, getData };