

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import po2 from "../../images/po2.webp"
import po1 from "../../images/po1.webp"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const  Caus=() =>{
  return (
    <div className="App">
     <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
 
  //autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={false}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  //deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-30-px"
  style={{width:"80%"}}
>
<div style={{marginLeft:"8%",position:"absolute",marginRight:"5%"}}>
 <img src={po2}  style={{backgroundColor:"#7080FA",width:"368px",height:"200px",borderRadius:"15px"}} alt="blue" />
 <p>Protect  yourself & your family against Covid-19</p>
 4
</div>
<div style={{marginLeft:"8%",position:"absolute"}}>
 <img src={po1}  style={{backgroundColor:"#4FDC95",width:"368px",height:"200px",borderRadius:"15px",marginRight:"2%"}} alt="blue" />
 3
</div>
<div style={{marginLeft:"8%",position:"absolute"}}>
 <img src={po2}  style={{backgroundColor:"#3CBBDA",width:"368px",height:"200px",borderRadius:"15px"}} alt="blue" />
 2
</div>
<div style={{marginRight:"8%",marginLeft:"8%"}}>
 <img src={po2}  style={{backgroundColor:"#FF9898",width:"368px",height:"200px",borderRadius:"15px"}} alt="blue" />
 
</div>
</Carousel>;


    </div>
  );
}
