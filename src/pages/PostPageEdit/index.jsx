import React, { Component } from 'react'
import axios from 'axios';
import Container from '../../components/Container'
import PostForm from '../../components/PostForm'
import WithParams from '../../components/WithParams';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';


class PostPageEdit extends Component {

  state = {
    post: null,
    isLoading: true,
    isGoToListPage: false,
  }; 

  id = this.props.params.id;
  
  componentDidMount(){
    fetch(`https://some-data.onrender.com/stores/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({post: data, isLoading: false}));
  }

  handleEditPost = async (body) => {
    // fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) =>
    //     this.setState({ post: data, isLoading: false, isEditing: false })
    //   );
    this.setState({ isLoading: true });
    try {
      const res = await axios.put(
        `https://some-data.onrender.com/stores/${this.id}`,
        body
      );
      console.log(res.data);
      this.setState({
        post: res.data,
        isLoading: false,
        isGotToListPage: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {


    return (
      <div>
        <Container>
          <h1>Edit page - صفحة التعديل </h1>
          
          <PostForm 
            post = {this.state.post}
            handleSubmit = {this.handleEditPost}
            isLoading = {this.state.isLoading}
          />
        </Container>

        {this.state.isGotToListPage && (
          <Navigate to={PATHS.POSTS.ROOT} replace />
        )}
      </div>
    );
  }
}

export default WithParams(PostPageEdit);
