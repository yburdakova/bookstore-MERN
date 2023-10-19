import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { BackButton, Spinner } from '../components';

function EditBooks() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect (() => {
    setLoading(true);

    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happpend. Please check console')
        console.log(error.message);
      })
  }
  
    return (
      <div className='p-4'>
        <BackButton/>
        <h1 className="text-3xl my-4">Edit book</h1>
        { loading ? <Spinner/> : ''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-2 text-gray-500">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full rounded-md" 
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-2 text-gray-500">Author</label>
            <input 
              type="text" 
              value={author}
              onChange={(e)=> setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full rounded-md" 
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-2 text-gray-500">Publish year</label>
            <input 
              type="text" 
              value={publishYear}
              onChange={(e)=> setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 w-full rounded-md" 
            />
          </div>
          <button
            className='p-2 bg-sky-300 m-8 rounded-md'
            onClick = {handleEditBook}
          >
            SAVE EDIT
          </button>
        </div>  
      
      </div>
    )
  }

export default EditBooks