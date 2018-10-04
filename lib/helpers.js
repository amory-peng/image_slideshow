import auth from '../auth.json';

// google custom search api helper
const fetchImages = (search, start) => {
  let url = 'https://www.googleapis.com/customsearch/v1?searchType=image&';
  // add query
  url += `q=${search}&`;
  // add custom search id
  url += `cx=${auth.cx}&`;
  // add key
  url += `key=${auth.key}&`;
  // pagination
  url += `start=${start}`;
  return fetch(url).then(res => res.json());
};

export default fetchImages;
