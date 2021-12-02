import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    const res = await api.fetchPosts()
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: res.data.data
    })
}

export const createPost = (data) => async (dispatch) => {
    const res = await api.createPost(data)

    dispatch({
        type: 'CREATE_POST',
        payload: res
    })
}