import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Shop with confidence using our secure payment gateway.<br></br> We support all major payment methods
       to make your checkout fast and hassle-free.<br></br>Your security is our top priority.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
