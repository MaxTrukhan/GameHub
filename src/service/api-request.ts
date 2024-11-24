import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key: '8a674db35826492ea99b52e66343f7b9' // Correct way to pass the API key
    }
});
