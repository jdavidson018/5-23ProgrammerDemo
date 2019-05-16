import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from "../components/Header";

export const items = [
  { id: 1, name: "hello" },
  { id: 2, name: "there" },
  { id: 3, name: "mate" }
];

storiesOf("Header", module).add("default", () => <Header items={items} />);
