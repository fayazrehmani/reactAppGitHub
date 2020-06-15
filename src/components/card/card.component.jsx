import React from 'react';



// CardList

class Card extends React.Component {
  render(props) {
    const profile = this.props;
    return(
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }

}
// github data api url : api.github.com/users/gaearon

export default Card;