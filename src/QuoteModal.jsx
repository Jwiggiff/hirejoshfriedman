export default function QuoteModal({ visible, setVisible, cart }) {
  function dismiss() {
    setVisible(false);
  }

  return (
    <>
      <div className={"quoteModal " + (visible ? "visible" : "")}>
        <form
          name="quote"
          method="POST"
          action={"/success?cart=" + encodeURIComponent(JSON.stringify(cart))}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="modal--header">
            <h1>Get a Quote!</h1>
            <button className="close" onClick={(e) => dismiss()}>
              &times;
            </button>
          </div>
          <div className="modal--body">
            <input type="hidden" name="form-name" value="quote" />
            <input type="hidden" name="numSections" value={cart.numSections} />
            <input
              type="hidden"
              name="management-page"
              value={cart.extras.includes("Management Page")}
            />
            <input
              type="hidden"
              name="logo-design"
              value={cart.extras.includes("Logo Design")}
            />
            <input
              type="hidden"
              name="setup-help"
              value={cart.extras.includes("Setup Help")}
            />
            <p>
              {cart.numSections} Section{cart.numSections > 1 ? "s" : ""} +{" "}
              {cart.extras.length > 0 ? cart.extras.join(", ") : "No Extras"}
            </p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="notes">Additional Notes:</label>
            <textarea name="notes" id="notes" rows="8"></textarea>
          </div>
          <div className="modal--actions">
            <button className="accent">Get a Quote!</button>
          </div>
        </form>
      </div>
      <div className="modal-bg" onClick={(e) => dismiss()}></div>
    </>
  );
}
