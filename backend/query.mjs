import fetchImages from './helpers.mjs';

const search = async (query) => {
  console.log('fetching from googs...');
  return fetchImages(query);
};

export default search;
