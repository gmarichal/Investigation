import React, { Component } from 'react';
import './PhotoGallery.css';
import ImgsViewer from 'react-images-viewer'


class PhotosGallery extends Component {

    
    
  render() {

    return (
      <ImgsViewer
      imgs={[{ src: 'https://s3.amazonaws.com/requestkittens/553c0437e4b0bde7020ac956-d9ed2ad384499394dde0eaa8c0ed040a/small.jpg' }, { src: 'https://s3.amazonaws.com/requestkittens/553c0437e4b0bde7020ac956-d9ed2ad384499394dde0eaa8c0ed040a/small.jpg' }]}
      /*currImg={this.state.currImg}
      isOpen={this.state.viewerIsOpen}
      onClickPrev={this.gotoPrevious}
      onClickNext={this.gotoNext}
      onClose={this.closeViewer}*/
    />
    );
  }
}


export default PhotosGallery;