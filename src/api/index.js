import axios from "axios";

const url = `http://localhost:5000/api/v1/posts`

export const fetchPosts = async () => {
    try {
        const res = await axios(url)

        return res
    } catch (error) {
        console.log(error.response)
    }
}

export const createPost = async (formData) => {
    try {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/posts',
            data: formData
        })

        return res.data.data
    } catch (error) {
        console.log(error)
    }
}