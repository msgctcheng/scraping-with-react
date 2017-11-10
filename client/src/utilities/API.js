import axios from "axios";

const authKey = "e416bddc342945bab46361142cb69544";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 

export default {

  queryNYT: (quer) => {
  	const query = queryURL + `&q=${quer}`;
    return axios.get(query);
  },
};