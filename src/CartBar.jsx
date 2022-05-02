import shoppingIcon from "../assets/shopping.png";

export default function CartBar({ cart }) {
  return (
    <div className="cartBar">
      <div className="icon">
        <span className="circle"></span>
        <img src={shoppingIcon} alt="Cart" />
      </div>
      <div className="cart--body">
        {cart.numSections} Section{cart.numSections > 1 ? "s" : ""} +{" "}
        {cart.extras.length > 0 ? cart.extras.join(", ") : "No Extras"}
      </div>
      <div className="actions">
        <button className="accent">Get a Quote!</button>
      </div>
    </div>
  );
}
