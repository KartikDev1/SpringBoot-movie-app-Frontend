import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080", // Change from ngrok to localhost
    headers: { "ngrok-skip-browser-warning": "true" }
});

