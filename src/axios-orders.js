import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-app-197ae.firebaseio.com/'
});

export default instance;