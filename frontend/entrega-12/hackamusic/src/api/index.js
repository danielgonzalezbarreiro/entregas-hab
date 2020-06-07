import config from './config.js';
const axios = require('axios').default;

const apiKey = config.apiKey;
const URL_BASE = 'https://ws.audioscrobbler.com/';
const URL_GEO_ARTISTS = `2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
const URL_GEO_TRACKS = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`
const URL_GEO_TAGS = `/2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`

async function getArtists() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_GEO_ARTISTS}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

async function getTopTracks() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_GEO_TRACKS}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

async function getTopTags() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_GEO_TAGS}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export default {
  getArtists,
  getTopTracks,
  getTopTags
}