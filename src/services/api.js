// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const countryService = {
  getCountries: (searchTerm) => 
    api.get('/countries', { params: searchTerm ? { search: searchTerm } : {} }),
  getCountryByName: (name) => 
    api.get(`/countries/${encodeURIComponent(name)}`),
  getWeather: (countryName) => 
    api.get('/weather', { params: { country: countryName } }),
  getCurrencyRates: (baseCode) => 
    api.get(`/currency/rates/${encodeURIComponent(baseCode)}`),
  convertCurrency: (amount, from, to) => 
    api.get('/currency/convert', { params: { amount, from, to } }),
  getRestaurants: (country) => 
    api.get('/restaurants', { params: { country } }),
  getHotels: (country) => 
    api.get('/hotels', { params: { country } }),
};

export default countryService;