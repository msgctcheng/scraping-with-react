import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 

export default {

  queryNYT: (quer) => {
  	const query = queryURL + `&q=${quer}`;
  
    console.log(axios.get(query));
    return axios.get(query);
  },
};