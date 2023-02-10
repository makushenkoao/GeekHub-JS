import axios from 'axios';
import {
    setStories,
    setStory,
    setComments,
    setSubComments,
    setStoriesAreLoading,
    setStoriesAreError,
    setStoryIsLoading,
    setStoryIsError,
    setCommentsAreLoading,
    setCommentsAreError, setSubCommentsAreLoading, setSubCommentsAreError
} from "../store/storiesReducer";
import {NotFound} from "../components/NotFound";
import {useNavigate} from "react-router-dom";

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const NEWS_STORIES_URL = `${BASE_URL}/newstories.json?orderBy=%22$key%22&limitToFirst=100`;
const ITEM_URL = `${BASE_URL}/item/`;

export const getStories = () => {
    return async dispatch => {
        try {
            dispatch(setStoriesAreLoading(true));
            const result = await axios.get(NEWS_STORIES_URL)
                .then(({data}) => Promise.all(data.map(id =>
                    axios.get(`${ITEM_URL + id}.json`))))
            dispatch(setStories(result));
            dispatch(setStoriesAreError(false));
        } catch (error) {
            dispatch(setStoriesAreError(error.message));
            dispatch(setStoriesAreLoading(false));
        }
    }
};

export const getStory = (id) => {
    return async dispatch => {
        try {
            dispatch(setStoryIsLoading(true));
            const {data} = await axios.get(`${ITEM_URL + id}.json`)
            dispatch(setStory(data));
            dispatch(setStoryIsError(false));
        } catch (error) {
            dispatch(setStoryIsError(error.message));
            dispatch(setStoryIsLoading(false));
        }
    }
};

export const getComments = (kids) => {
    return async dispatch => {
        try {
            dispatch(setCommentsAreLoading(true));
            const result = await Promise.all(kids.map(id => axios.get(`${ITEM_URL + id}.json`)))
            dispatch(setComments(result));
            dispatch(setCommentsAreError(false));
        } catch (error) {
            dispatch(setCommentsAreError(error.message));
            dispatch(setCommentsAreLoading(false));
        }
    }
};

export const getSubComments = (kids) => {
    return async dispatch => {
        try {
            dispatch(setSubCommentsAreLoading(true));
            const result = await Promise.all(kids.map(id => axios.get(`${ITEM_URL + id}.json`)))
            result.forEach((item) => dispatch(setSubComments(item)));
            dispatch(setSubCommentsAreError(false));
        } catch (error) {
            dispatch(setSubCommentsAreError(error.message));
            dispatch(setSubCommentsAreLoading(false));
        }
    }
};

