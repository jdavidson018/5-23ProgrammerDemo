import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from "../components/Header/Header";
import HeaderReadme from "../components/Header/README.md";

export const items = [
  { id: 2, name: "Quick" },
  { id: 3, name: "Brown" },
  { id: 4, name: "Fox" },
  { id: 5, name: "Jumps" },
  { id: 6, name: "Over" },
  { id: 7, name: "The" },
  { id: 8, name: "Lazy" },
  { id: 9, name: "Dog" }
];

storiesOf("Header", module)
  .addDecorator(story => <div className="ui container">{story()}</div>)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: HeaderReadme
    }
  })
  .add("default", () => <Header items={items} />);
