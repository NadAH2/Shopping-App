import axios from "axios";

import { useSelector } from "react-redux";
const url = "http://localhost:5000/api";

const PayButton = ({ products }) => {
  //  const auth = useSelector(state => state.auth)

  const handleChekout = () => {
    axios
      .post("http://localhost:5000/api/stripe/create-checkout-session", {
        products,
        // userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleChekout}>checkout</button>
    </>
  );
};
export default PayButton;
