import axios from 'axios';

export const client = axios.create({
  baseURL: `${import.meta.env.VITE_API}`
});
// client.get("/1").then((response) => { 	setPost(response.data) });