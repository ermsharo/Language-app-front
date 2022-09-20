const devUrl = "localhost:3000";
const prodUrl = "dictionary-api-app-front.herokuapp.com";

const prodUrlServer = "https://dictionary-api-app-back.herokuapp.com/";
const devUrlServer = "http://localhost:5000/";

let getBackendUrl = () => {
  if (window.location.host === prodUrl) return prodUrl;
  return devUrl;
};
