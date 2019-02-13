const API_KEY =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

const API_URL = "https://en.wikipedia.org/?curid=";

((global) => {
  fetch(API_KEY)
    .json()
    .then((res) => console.log(res));
  console.log(res);
})(window);
