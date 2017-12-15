// import store from "../store/store";
const apiurl = "api/data";
export default function getData(userid, callback) {
  fetch(apiurl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}
