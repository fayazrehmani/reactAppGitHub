import React from 'react';

import CardList from '../../components/card-list/card-list.component';
import Form from '../../components/form/form.component';
import '../homepage/style.css';
// GitHub username: sophiebits, sebmarkbage, bvaughn
const testData = [
  {name: 'Dan Abranov', avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4', company: 'Facebook'},
  {name: 'Sophie Alpert', avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4', company: 'Facebook'},
  {name: 'Dan Abranov', avatar_url: 'https://avatars0.githubusercontent.com/u/63648?v=4', company: 'Facebook'},
]

class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  state = {
    profiles: testData
  }

  addNewProfile = (profileData) => {
    //console.log('App', profileData);

    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render(props) {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList gitUser={this.state.profiles}/>
      </div>
    )
  }
}

export default HomePage;