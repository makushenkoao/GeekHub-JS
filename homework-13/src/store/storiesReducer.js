import {createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'stories',
    initialState: {
        stories: [],
        story: null,
        comments: [],
        subComments: [],
        isLoading: true,
        isError: false,
        storiesAreLoading: true,
        storyIsLoading: true,
        commentsAreLoading: true,
        subCommentsAreLoading: true,
        storiesAreError: false,
        storyIsError: false,
        commentsAreError: false,
        subCommentsAreError: false,
    },
    reducers: {
        setStories(state, action) {
            return {
                ...state,
                stories: action.payload,
                storiesAreLoading: false
            }
        },
        setStory(state,action) {
            return {
                ...state,
                story: action.payload,
                storyIsLoading: false
            }
        },
        setComments(state,action) {
            return {
                ...state,
                comments: action.payload,
                commentsAreLoading: false
            }
        },
        setSubComments(state,action) {
            return {
                ...state,
                subComments: [...state.subComments, action.payload],
                subCommentsAreLoading: false
            }
        },
        setStoriesAreLoading(state, action) {
            return {
                ...state,
                storiesAreLoading: action.payload
            }
        },
        setStoryIsLoading(state, action) {
            return {
                ...state,
                storyIsLoading: action.payload
            }
        },
        setCommentsAreLoading(state, action) {
            return {
                ...state,
                commentsAreLoading: action.payload
            }
        },
        setSubCommentsAreLoading(state, action) {
            return {
                ...state,
                subCommentsAreLoading: action.payload
            }
        },
        setStoriesAreError(state, action) {
            return {
                ...state,
                storiesAreError: action.payload
            }
        },
        setStoryIsError(state, action) {
            return {
                ...state,
                storyIsError: action.payload
            }
        },
        setCommentsAreError(state, action) {
            return {
                ...state,
                commentsAreError: action.payload
            }
        },
        setSubCommentsAreError(state, action) {
            return {
                ...state,
                subCommentsAreError: action.payload
            }
        }
    }
})


export default newsSlice.reducer;
export const {
    setStories,
    setStory,
    setComments,
    setSubComments,
    setStoriesAreLoading,
    setStoryIsLoading,
    setCommentsAreLoading,
    setSubCommentsAreLoading,
    setStoriesAreError,
    setStoryIsError,
    setCommentsAreError,
    setSubCommentsAreError,
} = newsSlice.actions;