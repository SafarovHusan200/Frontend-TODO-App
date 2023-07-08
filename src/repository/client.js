import axios from "axios";

export const baseDomain = "http://localhost:5000";

const client = axios.create({
  baseURL: baseDomain,
  headers: { "X-Custom-Header": "foobar" },
});

export default client;
