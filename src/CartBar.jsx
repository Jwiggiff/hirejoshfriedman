import { useState } from "react";
import shoppingIcon from "../assets/shopping.png";
import QuoteModal from "./QuoteModal";

export default function CartBar({ cart }) {
  let [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  return (
    <>
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
          <button className="accent" onClick={showModal}>
            Get a Quote!
          </button>
        </div>
      </div>
      <QuoteModal cart={cart} visible={visible} setVisible={setVisible} />
    </>
  );
}
