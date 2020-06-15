import React from 'react';

import './photoDirectory.css';

import Card from '../card/card.component';

class PhotoDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => this.setState({ photos : data }))
  }
  render() {
    const firstTenItems = this.state.photos.slice(0,10);
    return (
      <div className="container">
        <div className="row">
          {
            firstTenItems.map(photo =>
              <div key={photo.albumId} className="col-md-6">
                <Card photos={photo} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default PhotoDirectory;