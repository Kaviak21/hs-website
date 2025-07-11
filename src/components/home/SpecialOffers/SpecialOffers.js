import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
<div className="w-full pb-20">
  <Heading heading="Special Offers" />
  <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
    <Product
      _id="1101"
      img={spfOne}
      productName="Cap for Boys"
      price="35.00"
      color="Black and White"
      badge={true}
      des="Trendy black and white cap — perfect for boys who love sporty and casual style."
    />
    <Product
      _id="1102"
      img={spfTwo}
      productName="Tea Table"
      price="180.00"
      color="Gray"
      badge={true}
      des="Modern gray tea table — ideal for stylish living rooms and cozy tea times."
    />
    <Product
      _id="1103"
      img={spfThree}
      productName="Headphones"
      price="25.00"
      color="Mixed"
      badge={true}
      des="Enjoy crystal-clear sound and comfort with these vibrant, mixed-color headphones."
    />
    <Product
      _id="1104"
      img={spfFour}
      productName="Sunglasses"
      price="220.00"
      color="Black"
      badge={true}
      des="Sleek black sunglasses to keep you cool and protected in every sunny moment."
    />
  </div>
</div>

  );
};

export default SpecialOffers;
