import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-devzero-backend.herokuapp.com/'
});

export default instance;
