import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import { POSTS_COLUMNS } from '../../constants/posts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {PATHS} from '../../router/paths'
import { API_URL } from '../../components/config/api';








const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null)
  const navigate = useNavigate();

  // const [state, setState] = useState({
  //   posts: [],
  //   isLoading: false,
  //   error: null,
  // }) // this is bad 
  
  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // }) // this is better



  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get( API_URL + '/posts');
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchData()
  }, []);


  const handleDelete = async (id) => {
    console.log(id, 'is deleted');
    try {
      axios.delete(`${API_URL}/posts/${id}`);
    } catch (err) {
      console.log(err);
    }
    finally {
      setIsLoading(true)
    }
  };

  const handleEdit = (id) => {
    navigate(PATHS.POSTS.EDIT.replace(':id', id))
  };

  const handleView = (row) => {
    navigate(PATHS.POSTS.VIEW.replace(':id', row.id));

  }

  return (
    <div>
      <h1>Posts<small>page <small>haz</small></small></h1>
      <br /> <br />

      {/* this.setState({isCreating:true}) */}

      <button onClick={ ()=> navigate(PATHS.POSTS.CREATE)}>
        Create Post
      </button>

      <br /> <br /><br />
      <Table
        columns={POSTS_COLUMNS(handleDelete, handleEdit)}
        data={posts}
        onRowClick={handleView}
        isLoading={isLoading}

      />


    </div>
  )



} 

export default PostsPage;











