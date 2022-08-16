/// since in this project we only have one axios, so we don't create axios instance
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    // axios require we must return config in last line of this code block
    // we can setting up all axios options before return config, such as token, timeout and so on
    return config;
  },
  (error) => {
    // do something to show user error msg
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // response means axios request result, so we need to destructuring
    const res = response.data;

    // server side special error code handler, this can be hardcore if we want to make code more readable
    // all status code and pros name maybe diff so we have to talk with back-end engineer then modify this
    if (res.code !== 20000) {
      if ([50008, 50012, 50014].includes(res.code) && response.config.url !== "/api/user/info") {
        console.log("unexpected scene");
      }

      return Promise.reject("Error");
    }

    // if axios and server side status code all right then return true request result
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
