import React, { Component } from 'react'
import WithParams from '../../components/WithParams';
// import { Navigate } from 'react-router-dom';
// import { PATHS } from '../../router/paths';
import Container from '../../components/Container';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

class PostPag extends Component {


  state = { 
    post: null,
    isLoading: true,
    isEditing: false,

  };

  id = this.props?.params?.id;

  handleEdit = () => {
    console.log(this.id, 'is edited');
    this.setState({isEditing: true})
  } 

  componentDidMount(){
    fetch(`https://some-data.onrender.com/stores/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({post: data, isLoading: false}) );
  }

  render() {

    return (
      <Container>
        { this.state.isLoading? (
            <p>Loding post info...</p>
        ): (
          <>
            <h5>{this.state.post.id} </h5>
            <h2>{this.state.post?.name}</h2>
            <p>{this.state.post.cities}</p>
          </>
        )}

          <button onClick={this.handleEdit}>Edit</button>
          {
            this.state.isEditing && (
              < Navigate to={PATHS.POSTS.EDIT.replace(':id',this.id)} replace />
            )
          }

      </Container>
    )
  }
}

export default WithParams(PostPag);
/**
 * WithParams 
 * صراحتاً هاي بحسها عبارى عن موصل بتنقلك 
 * البروبس إللي في المكان الل أجت منو
 * 
 * الان مش ال إي دي وصلك كل الهتعملو إنك هتعمل ركوست طلب 
 * هتجيب الداتا تبع العنصر هاد او ال إي دي هاد او البووست هاد
 * #مش هنختلف
 *   طبعاُ أحنا الركوست هاد هنحطو بدالة كمبوننت دد ماونت 
 * 
 * طبعاُ ما بدنا ننسى انو لازمنا ستيت خاصة بالصفحة هاد إللي هي بوست بيج 
 * اول اشي لزمنا بالستيت بوست ورح يكون فاضي و إز لودنق أكيد 
 * وإز إيدتنق عشان اعدل فيما بعد
 * 
 */