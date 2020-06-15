import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);

    // fetch(`https://api.github.com/users/${this.state.userName}`)
    //     .then( res => res.json() )
    //     .then( data => this.props.onSubmit(data));
    
    console.log(resp);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input 
          type="text"
          value={this.state.userName} 
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required />
          <button>Add Card</button>
        </form>
      </div>
    )
  }
}

export default Form;