import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a343cafc0aef4612cb57819a46b9d3b038b9f31a9407c00363d39288bad3620f '
    }
});

