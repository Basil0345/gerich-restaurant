import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitems">
    <div className="app__menuitems-head">
      <div className="app__menuitems-name">
        <p className="p__cormorant" style={{ color: "DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitems-dash" />
      <div className="app__menuitems-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__menuitems-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
