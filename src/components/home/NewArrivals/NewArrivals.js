import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
<div className="w-full pb-16">
  <Heading heading="New Arrivals" />
  <Slider {...settings}>
    <div className="px-2">
      <Product
        _id="100001"
        img={newArrOne}
        productName="Round Table Clock"
        price="44.00"
        color="Black"
        badge={true}
        des="Stylish black round table clock — a perfect blend of elegance and functionality."
      />
    </div>
    <div className="px-2">
      <Product
        _id="100002"
        img={newArrTwo}
        productName="Smart Watch"
        price="250.00"
        color="Black"
        badge={true}
        des="Stay ahead of time with this sleek and feature-packed black smart watch."
      />
    </div>
    <div className="px-2">
      <Product
        _id="100003"
        img={newArrThree}
        productName="Cloth Basket"
        price="80.00"
        color="Mixed"
        badge={true}
        des="Handy and stylish cloth basket — ideal for laundry or home storage needs."
      />
    </div>
    <div className="px-2">
      <Product
        _id="100004"
        img={newArrFour}
        productName="Funny Toys for Babies"
        price="60.00"
        color="Mixed"
        badge={false}
        des="Bright and playful toys to keep your little ones happy and entertained."
      />
    </div>
    <div className="px-2">
      <Product
        _id="100005"
        img={newArrTwo}
        productName="Funny Toys for Babies"
        price="60.00"
        color="Mixed"
        badge={false}
        des="Adorable and safe baby toys — perfect for endless fun and learning."
      />
    </div>
  </Slider>
</div>

  );
};

export default NewArrivals;
