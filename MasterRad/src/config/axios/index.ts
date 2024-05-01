import axios from 'axios';
import {camelizeInterceptor} from './interceptors';

const customAxios = axios.create();

customAxios.defaults.responseType = 'json';
customAxios.interceptors.response.use(camelizeInterceptor);

export default customAxios;
