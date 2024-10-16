import axios from "axios";

const BASE_URL = "http://localhost:8000/";

export const fetchCompanies = async () => {
  return (await axios.get(`${BASE_URL}companies/`)).data;
};

export const fetchCompanyInfo = async (ticker: string) => {
  return (await axios.get(`${BASE_URL}companies/?ticker=${ticker}`)).data;
};
