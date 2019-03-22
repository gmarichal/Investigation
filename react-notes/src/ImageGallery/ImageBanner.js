import React, { Component } from 'react';
import './ImageBanner.css';
import Carousel from 'nuka-carousel';


class ImageBanner extends Component {

    
    
  render() {

    return (
      <Carousel 
        speed="1500" 
        transitionMode='scroll'
        //withoutControls='False' 
        wrapAround='True'
        pauseOnHover='True'
        autoplay='True'
        autoplayInterval='5000'
        style={{height:500 + 'px'}}
        
        /*renderBottomCenterControls={({ currentSlide }) => (
          <div>Slide: {currentSlide}</div>
        )}
        */
        >

        


        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/2.jpg"/>
        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/4.jpg" />
        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/5.jpg" />
        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/6.jpg" />
        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/7.jpg" />
        <img src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/8.jpg" />
      
      
      
      </Carousel>
    );
  }
}


export default ImageBanner;