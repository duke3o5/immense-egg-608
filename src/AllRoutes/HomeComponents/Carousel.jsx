import React, { Component } from "react";
import {
  Button,
  Heading,
  Stack,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Carousel.css';

export default class LazyLoad extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Heading>Most Popular Products</Heading>
        <Slider {...settings}>
          <div className="sliderDiv">
            <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png" alt="img"/>
            <h3>Dinning Table</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png" alt="img"/>
          <h3>Office Chair</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png" alt="img"/>
          <h3>Washing Machine</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png" alt="img"/>
          <h3>Air Conditioner</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png" alt="img"/>
          <h3>Home Theater</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png" alt="img"/>
          <h3>Gaming Console</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png" alt="img"/>
          <h3>Furniture</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png" alt="img"/>
          <h3>All Ecectronics</h3>
          </div>
          <div className="sliderDiv">
          <img className="sliderImage" src="https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png" alt="img"/>
          <h3>Double Bed</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
























// import React, { Component } from "react";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// export default class LazyLoad extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       lazyLoad: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       initialSlide: 2
//     };
//     return (
//       <div>
//         {/* <h2> Lazy Load</h2> */}
//         <Slider {...settings}>
//           <div>
//             <img src='https://m.media-amazon.com/images/I/A1xQCYatmtL._SX3000_.png' />
//           </div>
//           <div>
//             <img src='https://m.media-amazon.com/images/I/81O+fzWP4QL._SX3000_.jpg' />
//           </div>
          
//           <div>
//             <img src='https://m.media-amazon.com/images/I/715V9Q6T+6L._SX3000_.jpg' />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }