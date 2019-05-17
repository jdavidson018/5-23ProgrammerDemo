import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MainCard from "../components/MainCard";

export const identity = {
  id: 1,
  name: "mowgli",
  imgUrl:
    "https://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-5.jpg",
  description: "Damn I am cute"
};

storiesOf("Cards", module)
  .addDecorator(story => <div className="ui container">{story()}</div>)
  .add("MainCard", () => <MainCard identity={identity} />);
