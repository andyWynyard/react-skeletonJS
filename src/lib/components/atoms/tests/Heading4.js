import React from "react";
import ReactDOM from "react-dom";

import Heading4 from "../Heading4";

const div = document.createElement("div");

it("Renders the H3 without crashing", () => {
  ReactDOM.render(<Heading4>Hi there Bro</Heading4>, div);
});
