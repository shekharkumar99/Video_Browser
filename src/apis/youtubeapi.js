import axios from 'axios';
const KEY = 'AIzaSyBfGh8-7YbCHxoeEONd6l6iiwgV_ba9Rug';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})