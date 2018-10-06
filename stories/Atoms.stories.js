import React from "react";
import "typeface-roboto";

import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs/react";

import button from "./atoms/button";
import heading1 from "./atoms/heading1";
import heading2 from "./atoms/heading2";
import heading3 from "./atoms/heading3";
import heading4 from "./atoms/heading4";
import input from "./atoms/input";
import link from "./atoms/link";

const stories = storiesOf("Maverick|Atoms", module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
  .add("Description", () => (
    <p style={{ padding: "50px 100px", fontFamily: "Roboto" }}>
      Atoms are the smallest element possible. Add to this only if there is
      nothing smaller you can go. Use these to build larger components.
    </p>
  ))

  .add("Button", button)
  .add("Heading1", heading1)
  .add("Heading2", heading2)
  .add("Heading3", heading3)
  .add("Heading4", heading4)
  .add("Input", input)
  .add("Link", link);
