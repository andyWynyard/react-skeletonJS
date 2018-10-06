import React from "react";
import "typeface-roboto";

import { boolean, select, text } from "@storybook/addon-knobs/react";

import { withNotes } from "@storybook/addon-notes";

import ErrorText from "../../src/lib/components/atoms/ErrorText";

const errorText = () => {
  const innerText = text("Text", `Hi there, I'm an ERROR`);
  const fontFamily = text("fontFamily", "Roboto");
  const type = select("Type", ["error", "caution", "success"], "error");

  return (
    <div style={{ padding: "20px" }}>
      <ErrorText type={type} fontFamily={fontFamily}>
        {innerText}
      </ErrorText>
    </div>
  );
};

export default errorText;
