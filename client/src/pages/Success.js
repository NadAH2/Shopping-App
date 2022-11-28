import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <h4>
          Checkout success, your order is being prepared.Thanks for choosing
          NadiaHolic
        </h4>
        <div className="col text-center pt-5">
          <button className="btn btn-primary mx-auto d-block">
            <Link
              to="/Home"
              style={{ color: "white", textDecorationLine: "none" }}
            >
              {" "}
              Back to Homepage
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
