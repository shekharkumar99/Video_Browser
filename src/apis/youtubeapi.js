import axios from 'axios';
const KEY = 'AIzaSyB7Hnmb9jtzIhofyPEpCrXG0h44c3qazUw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})