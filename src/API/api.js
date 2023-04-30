import axios from 'axios';

axios.defaults.baseURL = 'https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1/';

export async function getAllUsers() {
  const { data } = await axios.get('users');
  return data;
}

export async function putUser(user) {
  const { data } = await axios.put(`users/${user.id}`, user);
  return data;
}
