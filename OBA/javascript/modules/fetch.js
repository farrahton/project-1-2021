// keys:

// my own= 'cdb8415c172ec6178b63451e222891a6' 
// public='1e19898c87464e239192c8bfe422f280'
// secret='4289fec4e962a33118340c888699438d'

import { render } from "./render.js";

export function fetchOBA(topic, type, selector) {

// fetching data
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const refine = `&refine=true`
const detail = 'Default';
const url = `${cors}${endpoint}${topic}${refine}${type}&authorization=${key}&detaillevel=${detail}&output=json`;
// const url2 = `https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0`

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data, selector);
    console.log(data)
  })
  .catch(err => {
    console.log(err);
  });
} 
