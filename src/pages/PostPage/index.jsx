import React, { useState, useEffect } from 'react'
import Container from '../../components/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import axios from 'axios';
import { API_URL } from '../../components/config/api';



const PostPage = () => {

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isEditing, setIsEditing] = useState(false)
  const [, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  

  useEffect(()=>{
    (async () => {
      
      try {
        setIsLoading(true);
        const {data} = await axios.get(`${API_URL}/posts/${id}`);
        setPost(data);
      }
      catch (error) {
        setError(error);
        console.log(error, "هين طبعنا الإيرور اللي مسكتو من الكاتش  هاد من صفحة  البوست بيج ");
      }
      finally {
        setIsLoading(false)
      }
    })()
  },[id])
    
  const handleEdit = () => navigate(PATHS.POSTS.EDIT.replace(':id',id));



  return (
    <Container>
      { isLoading? (
          <p>Loding post info...</p>
      ): (
        <>
          <h5>{post?.id} </h5>
          <h2>{post?.title}</h2>
          <h3>{post?.author}</h3>
        </>
      )}
        <button onClick={handleEdit}>Edit</button>

    </Container>
  )
}

export default PostPage;

