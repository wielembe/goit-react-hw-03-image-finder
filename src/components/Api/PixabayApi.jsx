import axios from 'axios';

const apiKey = `39919801-cd3556a07d6c2157d605c68ff`;
const baseUrl = `https://pixabay.com/api`;
const imgPerPage = 12;

export const getImages = async (query, page) => {
  let fetchLimit = page * imgPerPage;
  if (fetchLimit >= 500) {
    alert("You've reached the end of search results.");
    return;
  }
  const url = `${baseUrl}/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${imgPerPage}`;
  const resp = await axios.get(url);
  return resp.data.hits;
};
