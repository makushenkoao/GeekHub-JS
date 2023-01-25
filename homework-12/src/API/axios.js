import axios from "axios";

export default class Axios {
    static async getStarWarsInfo(page) {
        return await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    }
}