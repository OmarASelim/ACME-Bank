import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export {getUsersData, getTransactionsData, getAccountsData};

function getUsersData() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url).then(response => response.data);
}

function getTransactionsData() {
  const url = `${BASE_URL}/api/transactions`;
  return axios.get(url).then(response => response.data);
}

function getAccountsData() {
    const url = `${BASE_URL}/api/accounts`;
    return axios.get(url).then(response => response.data);
}

  