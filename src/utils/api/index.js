import axios from 'axios'
import firebase from '../config/firebase-config'

// SWAPI api
const swUrl = 'https://swapi.dev/api';

// Google images
const url = 'https://www.googleapis.com/customsearch/v1?';
const key = 'AIzaSyA1h5uk-gcJC5p06qG7lRdzvJ47-5mAsGU';
const cx = '3338703545c812a33';
const searchType = 'image';

// Voting firebase
const database = firebase.database();

export const fetchStarWarsData = async (type) => {
    try {
        return await axios.get(`${swUrl}/${type}/`);
    } catch (error) {
        return error;
    }
}

export const searchStarWarsActor = async (type, value) => {
    try {
        return await axios.get(`${swUrl}/${type}/?search=${value}`);
    } catch (error) {
        return error;
    }
}

export const fetchGoogleImages = async (name) => {
    try {
        return await axios.get(`${url}key=${key}&cx=${cx}&q=${name}&searchType=${searchType}`)
    } catch (error) {
        return error;
    }
}

export const setVotingData = (name, upvote, downvote) => {
    return database.ref(name).set({ upvote, downvote });
}

export const getVotingData = (name) => {
    return database.ref(name);
}