import React from "react";
import ReactDOM from "react-dom";

import Heading3 from "../Heading3";

const div = document.createElement("div");

it("Renders the H3 without crashing", () => {
  ReactDOM.render(<Heading3>Hi there Bro</Heading3>, div);
});
