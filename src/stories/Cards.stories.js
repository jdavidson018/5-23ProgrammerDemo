import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import MainCard from "../components/MainCard/MainCard";
import MainCardReadme from "../components/MainCard/README.md";

export const identity = {
  id: 1,
  name: "mowgli",
  imgUrl:
    "https://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-5.jpg",
  description: "Golly Gee I am a cute doggo"
};

storiesOf("Cards", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: MainCardReadme
    }
  })
  .add("MainCard", () => <MainCard identity={object("identity", identity)} />);
