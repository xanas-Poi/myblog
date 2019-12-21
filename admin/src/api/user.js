import axios from "../utils/axios";

export function login(data) {
  return axios({
    url: "/admin/login",
    method: "post",
    data
  });
}

export function getInfo(data) {
  return axios({
    url: "/admin/info",
    method: "get",
    data
  });
}
