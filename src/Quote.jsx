import Card from "./Card";
import adminIcon from "../assets/admin.png";
import logoIcon from "../assets/logo.png";
import setupIcon from "../assets/setup.png";
import { createContext, useContext, useState } from "react";
import CartBar from "./CartBar";

export default function Quote() {
  let [cart, setCart] = useState({
    numSections: 1,
    extras: [],
  });

  function setSections(num) {
    setCart({
      ...cart,
      numSections: num,
    });
  }

  function toggleExtra(extra) {
    let extras = cart.extras;
    if (extras.includes(extra)) {
      extras = extras.filter((e) => e !== extra);
    } else {
      extras.push(extra);
    }
    setCart({
      ...cart,
      extras,
    });
  }

  return (
    <>
      <div className="quote" id="quote">
        <h1>Get a Quote</h1>
        <div id="numSections" data-select-one="true">
          <Card
            num={1}
            title="1 Section"
            selected={cart.numSections === 1}
            onClick={() => {
              setSections(1);
            }}
          >
            Perfect For:
            <ul>
              <li>Online Resume</li>
              <li>Personal Portfolio</li>
            </ul>
          </Card>
          <Card
            num={2}
            title="2 Sections"
            selected={cart.numSections === 2}
            onClick={() => {
              setSections(2);
            }}
          >
            Perfect For:
            <ul>
              <li>Simple Business</li>
              <li>Photography/Art Portfolio</li>
            </ul>
          </Card>
          <Card
            num={3}
            title="3 Sections"
            selected={cart.numSections === 3}
            onClick={() => {
              setSections(3);
            }}
          >
            Perfect For:
            <ul>
              <li>Small E-Commerce Site</li>
              <li>Medium-Sized Business</li>
            </ul>
          </Card>
        </div>
        <h2>Extras</h2>
        <div id="extras">
          <Card
            icon={adminIcon}
            title="Management Page"
            selected={cart.extras.includes("Management Page")}
            onClick={() => {
              toggleExtra("Management Page");
            }}
          >
            <p>
              Add a management page to change the content of the website. No
              programming knowledge required.
            </p>
          </Card>
          <Card
            icon={logoIcon}
            title="Logo Design"
            selected={cart.extras.includes("Logo Design")}
            onClick={() => {
              toggleExtra("Logo Design");
            }}
          >
            <p>
              If you don't have a logo for your business, I'll create one as
              part of the website. Just provide the business name and any ideas
              you may have.
            </p>
          </Card>
          <Card
            icon={setupIcon}
            title="Setup Help"
            selected={cart.extras.includes("Setup Help")}
            onClick={() => {
              toggleExtra("Setup Help");
            }}
          >
            <p>
              Not sure how to get a website on the internet? I'll help you setup
              free hosting and guide you through buying a domain name.
            </p>
          </Card>
        </div>
        <div className="footer">
          For technical issues or questions, please email
          business@joshfriedman.dev
        </div>
      </div>
      <CartBar cart={cart} />
    </>
  );
}
