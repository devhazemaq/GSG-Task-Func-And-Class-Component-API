import React, {  useState } from 'react'
import Container from '../../components/Container'
import PostForm from '../../components/PostForm';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import  axios  from 'axios';
import { API_URL } from '../../components/config/api';




const PostPageCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);
  const navigate = useNavigate()

  const handleCreatePost = async (body) => {

    setIsLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/posts`,
        body
      );
      this.setState({ isLoading: false, isGoToListPage: true });
      setIsLoading(false);
      setIsGoToListPage(true);

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>        
        <Container>
          <h1>PageCreate - صفحة الإنشاء </h1>
          <PostForm
            handleSubmit={handleCreatePost}
            isLoading={isLoading}
          />
        </Container>
        {isGoToListPage && navigate(PATHS.POSTS.ROOT)}
        {/* {isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />} */}
      </div>
  )
}

export default PostPageCreate;
















/*
export default class PostPageCreate extends Component {

  state = {
    isLoading: false,
    isGoToListPage: false,
  };


  
  handleCreatePost = async (body) => {


    this.setState({ isLoading: true });
    try {
      const res = await axios.post(
        `${API_URL}/posts`,
        body
      );
      this.setState({ isLoading: false, isGoToListPage: true });

      console.log(res.data , 'kkk');
    } catch (error) {
      console.log(error.message);
    }
  };



  render() {
    
    return (
      <div>        
        <Container>
          <h1>PageCreate - صفحة الإنشاء </h1>
          
          <PostForm
            handleSubmit={this.handleCreatePost}
            isLoading={this.state.isLoading}
          />

        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />}
      </div>
    )
  }
}
*/