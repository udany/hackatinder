import axios from 'axios';

const options = {
    baseURL: `http://localhost:3001`,
    withCredentials: true
};
const api = axios.create(options);

export default ({ app }, inject) => {
    inject('api', api)
}
