import { useNavigate } from "react-router-dom";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function QuoteModal({ visible, setVisible, cart }) {
  let navigateTo = useNavigate();

  function dismiss() {
    setVisible(false);
  }

  function handleSubmit(e) {
    let formData = new FormData(e.target);
    let data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote", ...data }),
    })
      .then(() => {
        // navigateTo("/success?cart=" + encodeURIComponent(JSON.stringify(cart)))
        navigateTo("/success", { state: { cart } });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  }

  return (
    <>
      <div className={"quoteModal " + (visible ? "visible" : "")}>
        <form
          onSubmit={handleSubmit}
          // name="quote"
          // method="POST"
          // action={"/success?cart=" + encodeURIComponent(JSON.stringify(cart))}
        >
          <div className="modal--header">
            <h1>Get a Quote!</h1>
            <button className="close" onClick={(e) => dismiss()}>
              &times;
            </button>
          </div>
          <div className="modal--body">
            <input type="hidden" name="form-name" value="quote" />
            <input
              type="hidden"
              name="numberOfSections"
              value={cart.numSections}
            />
            <input
              type="hidden"
              name="extras"
              value={
                cart.extras.length > 0 ? cart.extras.join(", ") : "No Extras"
              }
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
            <a href="/success">test</a>
            <button className="accent">Get a Quote!</button>
          </div>
        </form>
      </div>
      <div className="modal-bg" onClick={(e) => dismiss()}></div>
    </>
  );
}
