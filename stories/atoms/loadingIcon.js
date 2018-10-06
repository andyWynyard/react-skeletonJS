import React from "react";

import { boolean, select, text } from "@storybook/addon-knobs/react";

import { withNotes } from "@storybook/addon-notes";

import icon from "../../src/media/group.svg";

import LoadingIcon from "../../src/lib/components/atoms/LoadingIcon";

const loadingIcon = () => {
  return (
    <div style={{ padding: "20px" }}>
      <LoadingIcon src={icon} />
    </div>
  );
};

export default loadingIcon;
