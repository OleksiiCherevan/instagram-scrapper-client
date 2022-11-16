import axios from "axios";
import { SERVER_URL, SCRAP_URL } from "../config"

const DEFAULT_USER_URL = "instasamka"; // example

// "http://127.0.0.1:105/?url=https://instanavigation.com/ru/profile/instasamka"

export const getDataAboutUser = (userURL = DEFAULT_USER_URL) => {
    const url = `${SERVER_URL}?url=${SCRAP_URL}${userURL}`
    return axios(url).then(res => res)
}