import { addDecorator, configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { addReadme } from "storybook-readme";
import "../src/index.css";

const req = requireContext("../src/stories", true, /\.stories\.js$/);
addDecorator(addReadme);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
