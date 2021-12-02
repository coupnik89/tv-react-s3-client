import { useState, useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import { getPosts, createPost } from './actions/post'

import Posts from './Components/Posts'

import './App.css';
import Spinner from './Components/Spinner/Spinner'

function App() {
  const [file, setfile] = useState(null)
  const [description, setdescription] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const onFileChange = (e) => {
    setfile(e.target.files[0])
  }

  const onDescriptionChange = (e) => {
    setdescription(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault() 

    const formData = new FormData()
    formData.append('image', file)
    formData.append('description', description)

    dispatch(createPost(formData))

    clear()
  }

  const clear = () => {
    setfile(null)
    setdescription('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App S3</h1>
      </header>
        <form onSubmit={onSubmitHandler}>
          <input 
            filename={file}
            onChange={onFileChange}
            type="file" 
            accept='image/*'/>
          <input 
            type="text" 
            onChange={onDescriptionChange}
            placeholder='Description'
            />

            <button type='submit'>Submit</button>
        </form>
        <Posts />
    </div>
  );
}

export default App;
