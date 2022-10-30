import axios from 'axios';

export default function fetchImagesWithQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=30927119-4af7e4fb2417c5e11ceee7819&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}
