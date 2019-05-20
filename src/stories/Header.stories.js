import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from "../components/Header/Header";
import HeaderReadme from "../components/Header/README.md";

storiesOf("Header", module)
  .addDecorator(story => <div className="ui container">{story()}</div>)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: HeaderReadme
    }
  })
  .add("Default Header", () => <Header />);
