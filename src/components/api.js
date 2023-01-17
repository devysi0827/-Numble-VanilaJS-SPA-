const baseUrl = "http://43.201.103.199/";

export const getPosts = function () {
  const url = baseUrl + "posts";
  axios
    .get(url)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => console.log(err));
};

const apiCall = function () {};

export default apiCall;
