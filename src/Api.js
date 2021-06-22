const ENDPOINT = 'https://www.omdbapi.com';

export const getMoviesData = async (searchValue) => {
  const url = `${ENDPOINT}/?s=${searchValue}&apikey=df192e69`;
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};
