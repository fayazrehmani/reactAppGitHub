import React from 'react';

import Card from '../card/card.component';

class CardList extends React.Component {
  
  render(props) {
    return(
      <div>
      
        {
          this.props.gitUser.map( profile => <Card {...profile} />)
        }
        {/* <Card {...testData[0]} />
        <Card {...testData[1]} /> */}
      </div>
    )
  }
}

export default CardList;