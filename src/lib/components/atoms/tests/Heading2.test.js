import React from "react";
import ReactDOM from "react-dom";

import Heading2 from "../Heading2";

const div = document.createElement("div");

it("Renders a Heading2 without crashing", () => {
  ReactDOM.render(<Heading2>Hi there</Heading2>, div);
});
