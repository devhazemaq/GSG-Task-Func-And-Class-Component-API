import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import Container from '../../components/Container'
import PostForm from '../../components/PostForm'
// import WithParams from '../../components/WithParams';
import {  useParams } from 'react-router-dom';
// import { PATHS } from '../../router/paths';
import { API_URL } from '../../components/config/api';





const PostPageEdit = () => {

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setIsGoToListPage] = useState(false);
  const [, setError] = useState(false);

  
  const { id } = useParams(); 


  useEffect( () => {
    
    (
      async () => {
        setIsLoading(true);
        try{                             //API_URL + '/posts' +
          const {data} = await axios.get(`${API_URL}/posts${id}`);
          setPost(data);
        }catch (error){
          setError(error.message);
    
        }finally{
          // سواء جاب البوست او ماجبوش لازم نوقف الانتظار
          setIsLoading(false);
        }
      }
    )()
  }, [id])

  
  const handleEditPost = async (body) => {

    setIsLoading(true);
    try {
      const res = await axios.put(
        `${API_URL}/posts/${id}`,
        body
      );
      console.log(res.data);
      setPost(res.data);
      setIsLoading(false);
      setIsGoToListPage(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Container>
        <h1>Edit page - صفحة التعديل  {id}  </h1>
        {console.log(post , "هاد بس افون التعديل بدي شوف الستيت شو فيها")}
        <PostForm 
          post = {post}
          handleSubmit = {handleEditPost}
          isLoading = {isLoading}
        />
      </Container>

      {/* {isGoToListPage && (
        <Navigate to={PATHS.POSTS.ROOT} replace />
      )} */}
    </div>
  );
}

export default PostPageEdit;




// class PostPageEdit1 extends Component {

  // state = {
  //   post: null,
  //   isLoading: true,
  //   isGoToListPage: false,
  // }; 

  // id = this.props.params.id;
  
  // componentDidMount(){
  //   fetch(`${API_URL}/posts/${this.id}`)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({post: data, isLoading: false}));
  // }

  // handleEditPost = async (body) => {

  //   this.setState({ isLoading: true });
  //   try {
  //     const res = await axios.put(
  //       `${API_URL}/posts/${this.id}`,
  //       body
  //     );
  //     console.log(res.data);
  //     this.setState({
  //       post: res.data,
  //       isLoading: false,
  //       isGoToListPage: true,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

//   render() {


//     return (
//       <div>
//         <Container>
//           <h1>Edit page - صفحة التعديل </h1>
//           {console.log(this.state?.post , "هاد بس افون التعديل بدي شوف الستيت شو فيها")}
//           <PostForm 
//             post = {this.state.post}
//             handleSubmit = {this.handleEditPost}
//             isLoading = {this.state.isLoading}
//           />
//         </Container>

//         {this.state.isGoToListPage && (
//           <Navigate to={PATHS.POSTS.ROOT} replace />
//         )}
//       </div>
//     );
//   }
// }

// export default WithParams(PostPageEdit);
