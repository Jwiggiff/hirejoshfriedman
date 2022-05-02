import { useSearchParams } from "react-router-dom";

export default function SuccessPage() {
  let [params, setParams] = useSearchParams();
  let cart = JSON.parse(params.get("cart"));

  return (
    <section className="success">
      <div className="container">
        <h1 className="big">👍</h1>
        <h1>Thank You!</h1>
        <h3>A quote has been requested for the following order:</h3>
        {/* <p>
          {cart.numSections} Section{cart.numSections > 1 ? "s" : ""} +{" "}
          {cart.extras.length > 0 ? cart.extras.join(", ") : "No Extras"}
        </p> */}
        <p>You can expect an email within 1-3 business days.</p>
      </div>
    </section>
  );
}
