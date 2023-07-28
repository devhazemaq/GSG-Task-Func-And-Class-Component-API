import React, { Component } from 'react'
import { INPUTS_ARRAY } from '../../constants/posts'







class PostForm extends Component {

  state = {
    title: '',
    author: '',
    isGetFirstTimeData: true,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      author: this.state.author,
    };

    this.props.handleSubmit(data);
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props.post)
    if (props.post && state.isGetFirstTimeData) {
      return {
        title : props.post.title,
        author : props.post.author,
        isGetFirstTimeData: false,
      }
    }
    return null;
  }

  handleChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }
  
  render() {
  

    return (
      
      <form onSubmit={this.handleSubmit} >
        {INPUTS_ARRAY.map((input) =>(
          <div key={input.id}> 
            <label htmlFor={input.id}>{input.label}</label>
            < input 
              type={input.type}
              id={input.id}
              name={input.name}
              value={this.state[input.id]}
              onChange={this.handleChangeInput}
              style={{
                padding: 12,
                width: 300,
                marginTop: 20,
                marginLeft: 15,
              }}
            />
          </div>
        ))}
        <button type='submit'>
          {this.props.isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>

    )
  }
}

export default PostForm;