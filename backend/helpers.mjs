import fetch from 'node-fetch';
import auth from '../auth.json';

// take response from custom search api and pull out the img urls and the page
const parseResponse = (response) => {
  const imgs = response.items.map(item => item.link);
  const nextIdx = response.queries.nextPage[0].startIndex;
  return { imgs, nextIdx };
};

// google custom search api helper
const fetchImagesActual = (search, { startIdx = 0, safe = false } = {}) => {
  let url = 'https://www.googleapis.com/customsearch/v1?searchType=image&';
  // add query
  url += `q=${search}&`;
  // add custom search id
  url += `cx=${auth.cx}&`;
  // add key
  url += `key=${auth.key}&`;
  // pagination
  url += `startIndex=${startIdx}&`;
  // safesearch
  url += `safe=${safe ? 'active' : 'off'}`;
  return fetch(url)
    .then(res => res.json())
    .then(res => parseResponse(res));
};

const fetchImages = () => ({
  imgs: [
    'https://i.kym-cdn.com/entries/icons/facebook/000/021/033/Screenshot_236.jpg',
  ],
  nextIdx: null,
});

export default fetchImages;
