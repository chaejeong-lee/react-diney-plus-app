import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7f7ef4743d40c1f807fa347329e24088",
    language: "ko-KR",
  },
});

export default instance;
