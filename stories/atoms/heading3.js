import React from "react";
import "typeface-roboto";

import { boolean, select, text } from "@storybook/addon-knobs/react";

import { withNotes } from "@storybook/addon-notes";

import Heading3 from "../../src/lib/components/atoms/Heading3";

const heading3 = () => {
  const innerText = text("Text", `Hi there, I'm an h2`);
  const fontFamily = text("fontFamily", "Roboto");
  const color = text("color", "greenyellow");
  const margin = text("margin", "10px 20px");
  const padding = text("padding", "5px 20px");

  return (
    <div style={{ padding: "20px" }}>
      <Heading3
        margin={margin}
        padding={padding}
        color={color}
        fontFamily={fontFamily}
      >
        {innerText}
      </Heading3>
    </div>
  );
};

export default heading3;
