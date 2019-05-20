import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import { TestModal } from "../components/Modal/Modal";
import ModalReadme from "../components/Modal/README.md";

const dogs = [
  { id: 1, name: "Butty", breed: "Great Dane", info: "/" },
  { id: 2, name: "Buster", breed: "Yellow Lab", info: "/" },
  { id: 3, name: "Barney", breed: "Bernese Mountain Dog", info: "/" },
  { id: 4, name: "Bitsy", breed: "Maltipoo", info: "/" }
];

storiesOf("Modals", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div className="ui container">{story()}</div>)
  .addParameters({
    readme: {
      sidebar: ModalReadme
    }
  })
  .add("Delete Modal", () => <TestModal />);
