import { useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner';

import classes from './index.module.css'

const Posts = () => {
    const posts = useSelector(state => state.posts)

    return (
        <div>
            {!posts ? <Spinner /> : posts.map(post => (
                <div  key={post._id}>
                    <img src={`/img/${post.photo_url}`} alt={post.description} />
                    <p>{post.photo_url}</p>
                </div>
            ))}
        </div>
    )
}
export default Posts