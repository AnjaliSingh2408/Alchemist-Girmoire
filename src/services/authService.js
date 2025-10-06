import API from "./api";

export async function login(email, password) {
  const res = await API.post("/auth/login", { email, password });
  return res.data; // { token }
}

export async function register(payload) {
  const res = await API.post("/auth/register", payload);
  return res.data;
}
